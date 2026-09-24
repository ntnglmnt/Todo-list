const taskController = {

    // createDisplay: () => {
    //     const taskDisplayTopPanel = document.querySelector('.taskDisplayTopPanel')
    // },

    createTaskButton: () => {

        const taskDisplayTopPanel = document.querySelector('.taskDisplayTopPanel')

        const addTaskBtn = document.createElement('button')
        addTaskBtn.classList.add('taskAdd')
        addTaskBtn.innerHTML = 'Add Task'
        addTaskBtn.addEventListener('click', taskController.createTask)
        taskDisplayTopPanel.appendChild(addTaskBtn)
        
    },

    createTask: () => {

            const cardDisplay = document.querySelector('.cardDisplay')

            const taskCard = document.createElement('div')
            taskCard.classList.add('taskCard')
            let taskName = prompt('Enter task name')
            let taskDate = prompt('Enter task date')
            let taskPrio = prompt('Enter task priority (low,med,high')
            taskCard.textContent = `${taskName} - ${taskDate} - ${taskPrio}`
            cardDisplay.appendChild(taskCard)
        }
}

taskController.createTaskButton()