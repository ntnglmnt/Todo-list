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

            const cardTopPanel = document.createElement('div')
            cardTopPanel.classList.add('topPanel')
            taskCard.appendChild(cardTopPanel)

            const taskCardName = document.createElement('div')
            taskCardName.classList.add('taskCardName')
            taskCardName.innerHTML = taskName
            cardTopPanel.appendChild(taskCardName)

            const taskCardPrio = document.createElement('div')
            taskCardPrio.classList.add('taskCardPrio')
            taskCardPrio.innerHTML = taskPrio
            cardTopPanel.appendChild(taskCardPrio)

            const taskCompletion = document.createElement('button')
            taskCompletion.classList.add('taskCompletion')
            cardTopPanel.appendChild(taskCompletion)

            const cardMidPanel = document.createElement('div')
            cardMidPanel.classList.add('midPanel')
            taskCard.appendChild(cardMidPanel)

            const taskCardDetails = document.createElement('div')
            taskCardDetails.classList.add('taskCardDetails')
            taskCardDetails.innerHTML = taskDetails
            cardMidPanel.appendChild(taskCardDetails)

            const cardBottomPanel = document.createElement('div')
            cardBottomPanel.classList.add('bottomPanel')
            taskCard.appendChild(cardBottomPanel)

            const taskCardDate = document.createElement('div')
            taskCardDate.classList.add('taskCardDate')
            taskCardDate.innerHTML = taskDate
            cardBottomPanel.appendChild(taskCardDate)
        }
}

taskController.createTaskButton()