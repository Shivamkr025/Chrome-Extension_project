document.addEventListener('DOMContentLoaded', function () {
    const mainContainer = document.querySelector('.main-container');

    let todoList = JSON.parse(localStorage.getItem('todoList')) || [];
    if (todoList.length > 0) {
        mainContainer.innerHTML = '<h2>Today\'s tasks:</h2>';
        todoList.forEach(function (todo, index) {
            mainContainer.innerHTML += `
                <div class="task-item">
                    <input type="checkbox" id="task_${index}" ${todo.completed ? 'checked' : ''}>
                    <label for="task_${index}"><strong>${index + 1}. ${todo.title}</strong> : ${todo.growth}</label>
                    <button class="delete-btn" data-index="${index}">Delete</button>
                </div>`;

            const deleteBtn = mainContainer.querySelector(`.delete-btn[data-index="${index}"]`);
            deleteBtn.addEventListener('click', function () {
                todoList.splice(index, 1);
                localStorage.setItem('todoList', JSON.stringify(todoList));
                location.reload(); 
            });

            const checkbox = mainContainer.querySelector(`#task_${index}`);
            checkbox.addEventListener('change', function () {
                todoList[index].completed = this.checked;
                localStorage.setItem('todoList', JSON.stringify(todoList));
            });
        });
    } else {
        mainContainer.innerHTML = '<p>No tasks stored yet for today.</p>';
    }
});
