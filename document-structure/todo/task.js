const taskForm = document.getElementById('tasks__form');
const taskInput = document.getElementById('task__input');
const taskList = document.getElementById('tasks__list');

taskForm.addEventListener('submit', function(e) {
    e.preventDefault(); // предотвращаем перезагрузку страницы

    const text = taskInput.value.trim();

    if (!text) {
        return;
    }

    const taskDiv = document.createElement('div');
    taskDiv.classList.add('task');

    const titleDiv = document.createElement('div');
    titleDiv.classList.add('task__title');
    titleDiv.textContent = text;

    const removeLink = document.createElement('a');
    removeLink.href = '#';
    removeLink.classList.add('task__remove');
    removeLink.textContent = '×';

    taskDiv.appendChild(titleDiv);
    taskDiv.appendChild(removeLink);

    taskList.appendChild(taskDiv);

    taskInput.value = '';
});

taskList.addEventListener('click', function(e) {
    if (e.target.classList.contains('task__remove')) {
        e.preventDefault(); // если вдруг это ссылка

        const taskElement = e.target.closest('.task');
        if (taskElement) {
            taskElement.remove();
        }
    }
});