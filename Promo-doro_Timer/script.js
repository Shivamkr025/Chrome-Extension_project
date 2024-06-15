let timer;
let minutes;
let seconds = 0;
let isRunning = false;

function updateDisplay() {
    const timeElement = document.getElementById('time');
    const formattedMinutes = minutes < 10 ? '0' + minutes : minutes;
    const formattedSeconds = seconds < 10 ? '0' + seconds : seconds;
    timeElement.textContent = `${formattedMinutes}:${formattedSeconds}`;
}

function toggleStartPauseButton(running) {
    const startButton = document.getElementById('start');
    startButton.textContent = running ? 'Pause' : 'Start';
}

function startTimer() {
    if (isRunning) {
        clearInterval(timer);
        isRunning = false;
        toggleStartPauseButton(false); 
        return;
    }

    isRunning = true;
    toggleStartPauseButton(true); 
    timer = setInterval(() => {
        if (seconds === 0) {
            if (minutes === 0) {
                clearInterval(timer);
                isRunning = false;
                toggleStartPauseButton(false); 
                alert('Time\'s up!');
                return;
            } else {
                minutes--;
                seconds = 59;
            }
        } else {
            seconds--;
        }
        updateDisplay();
    }, 1000);
}

function saveTask() {
    const taskInput = document.getElementById('task-box');
    const taskList = document.getElementById('task-list');

    if (taskInput.value.trim() === "") {
        alert("Please enter a task.");
        return;
    }

    const taskItem = document.createElement('li');
    taskItem.className = 'task-item';

    const taskText = document.createElement('span');
    taskText.textContent = taskInput.value;

    const removeButton = document.createElement('button');
    removeButton.textContent = 'Delete';
    removeButton.onclick = () => {
        taskList.removeChild(taskItem);
    };

    taskItem.appendChild(taskText);
    taskItem.appendChild(removeButton);
    taskList.appendChild(taskItem);

    taskInput.value = '';
}

function initializeTimer() {
    const path = window.location.pathname;
    if (path.includes('shortBreak.html')) {
        minutes = 5;
    } else if (path.includes('longBreak.html')) {
        minutes = 15;
    } else {
        minutes = 25;
    }
    updateDisplay();
}

document.addEventListener('DOMContentLoaded', () => {
    initializeTimer();
    document.getElementById('start').addEventListener('click', startTimer);
    document.getElementById('save-btn').addEventListener('click', saveTask);
});
