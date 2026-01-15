const timer = document.getElementById('timer');
const id = setInterval(() => {
      let timerValue = Number(timer.textContent);

    timerValue -= 1;
    timer.textContent = timerValue;

    if (timerValue === 0) {
        clearInterval(timerValue);
        alert("Вы победили в конкурсе!")
    }

},1000)


