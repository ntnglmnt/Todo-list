// Handles the eventlisteners for tasks

import { createTask } from './1-models.js'
import { appState } from './2-state.js'
import { renderTask } from './4-render-task.js'

export function initTaskControls() {
    document.querySelector('.addTaskBtn').addEventListener('click', () => {

        createNewTask()
        
    })
}

initTaskControls();

export function distributeTaskEventListeners(task) {
    task.completeBtn.addEventListener('click', () => {
        task.element.remove()
        appState.activeProject.tasks = appState.activeProject.tasks.filter(t => t !== task)
    })
}



function createNewTask() {

    const title = prompt('Enter task title')
    if (!title) return
    const date = prompt('Enter task date')
    const details = prompt('Enter task details')
    const priority = prompt('Enter priority')

    const task = createTask(title, date, details, priority)
    renderTask(task)
    distributeTaskEventListeners(task)
    appState.activeProject.tasks.push(task)
    appState.activeProject.cardDisplay.appendChild(task.element)
}