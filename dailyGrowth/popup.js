document.addEventListener('DOMContentLoaded', function () {
    const storeButton = document.getElementById('storeButton');
    const titleInput = document.getElementById('titleInput');
    const growthInput = document.getElementById('growthInput');
    const outputDiv = document.getElementById('output');

    storeButton.addEventListener('click', function () {
        let todoList = JSON.parse(localStorage.getItem('todoList')) || [];
        let title = titleInput.value.trim();
        let growth = growthInput.value.trim();

        if (title !== '' && growth !== '') {
            let todo = { title: title, growth: growth, completed: false };
            todoList.push(todo);
            localStorage.setItem('todoList', JSON.stringify(todoList));
            titleInput.value = '';
            growthInput.value = '';
            outputDiv.textContent = 'Daily growth stored successfully!';
        } else {
            outputDiv.textContent = 'Please fill out all fields!';
        }
    });

});
