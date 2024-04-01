let time = document.querySelector(".time");
let play = document.querySelector(".play");
let stop = document.querySelector(".stop");

let condition = false;
let second = 0;
let minute = 0;
let hour = 0;
let pusk; // otchet vremeni

function formatTime(value) {
  return value < 10 ? "0" + value : value;
}
play.addEventListener("click", () => {
  if (!condition) {
    play.style.backgroundImage = "url(img/pause.svg)";
    condition = true;
    pusk = setInterval(function () {
      second += 1;
      console.log(second);
      if (second !== 0 && second % 60 == 0) {
        minute += 1;
        second = 0; // Сбросить счетчик секунд
      }
      if (minute !== 0 && minute % 60 == 0) {
        hour += 1;
        minute = 0;
        second = 0;
      }
      time.innerHTML = `${formatTime(hour)}:${formatTime(minute)}:${formatTime(
        second
      )}`;
    }, 1000);
  } else if (condition) {
    play.style.backgroundImage = "url(img/play.svg)";
    condition = false;
    clearInterval(pusk);
  }
});

stop.addEventListener("click", function () {
  minute = 0;
  second = 0;
  hour = 0;
  condition = false;
  clearInterval(pusk);
  play.style.backgroundImage = "url(img/play.svg)";
  time.innerHTML = `${formatTime(hour)}:${formatTime(minute)}:${formatTime(
    second
  )}`;
});
