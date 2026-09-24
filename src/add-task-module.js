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
            let taskDetails = prompt('Enter task related details, up to 100 words')
            let taskPrio = prompt('Enter task priority (low,med,high')
            cardDisplay.appendChild(taskCard)

            const taskCardName = document.createElement('div')
            taskCardName.classList.add('taskCardName')
            taskCardName.innerHTML = taskName
            taskCard.appendChild(taskCardName)

            const taskCardDate = document.createElement('div')
            taskCardDate.classList.add('taskCardDate')
            taskCardDate.innerHTML = taskDate
            taskCard.appendChild(taskCardDate)

            const taskCardDetails = document.createElement('div')
            taskCardDetails.classList.add('taskCardDetails')
            taskCardDetails.innerHTML = taskDetails
            taskCard.appendChild(taskCardDetails)

            const taskCardPrio = document.createElement('div')
            taskCardPrio.classList.add('taskCardPrio')
            taskCardPrio.innerHTML = taskPrio
            taskCard.appendChild(taskCardPrio)
        }
}

taskController.createTaskButton()