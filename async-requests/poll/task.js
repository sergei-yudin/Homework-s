const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/poll');
xhr.send();

xhr.addEventListener('load', function() {
    console.log(xhr.responseText);
    const response = JSON.parse(xhr.responseText);
    console.log(response.data.title);
    console.log(response.data.answers);

    const pollTittle = document.getElementById('poll__title');
    pollTittle.textContent = response.data.title;

    const answersContainer = document.getElementById('poll__answers');
    answersContainer.innerHTML = '';

    const dataAnswers = response.data.answers
    dataAnswers.forEach(answer => {
        const button = document.createElement('button');
        button.classList.add('poll__answer')
        button.textContent = answer;
        answersContainer.appendChild(button);
    })

    const answerButtons = answersContainer.querySelectorAll('.poll__answer');

    answerButtons.forEach((button) => {
        button.addEventListener('click', function() {
            alert("Спасибо, ваш голос засчитан!")
        })
    })
})