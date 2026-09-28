// Handles DOM generation for the tasks
function renderTask(task) {

    const taskCard = document.createElement('div')
    taskCard.classList.add('taskCard')

    const cardTopPanel = document.createElement('div')
    cardTopPanel.classList.add('topPanel')
    taskCard.appendChild(cardTopPanel)

    const taskCardName = document.createElement('div')
    taskCardName.classList.add('taskCardName')
    taskCardName.innerHTML = task.title
    cardTopPanel.appendChild(taskCardName)

    const taskCardPrio = document.createElement('div')
    taskCardPrio.classList.add('taskCardPrio')
    taskCardPrio.innerHTML = task.priority
    cardTopPanel.appendChild(taskCardPrio)

    const taskCompletion = document.createElement('button')
    taskCompletion.classList.add('taskCompletion')
    cardTopPanel.appendChild(taskCompletion)
    // taskCompletion.addEventListener('click', () => {
    //     taskController.completeTask(taskCard)
    // })

    const cardMidPanel = document.createElement('div')
    cardMidPanel.classList.add('midPanel')
    taskCard.appendChild(cardMidPanel)

    const taskCardDetails = document.createElement('div')
    taskCardDetails.classList.add('taskCardDetails')
    taskCardDetails.innerHTML = task.details
    cardMidPanel.appendChild(taskCardDetails)

    const cardBottomPanel = document.createElement('div')
    cardBottomPanel.classList.add('bottomPanel')
    taskCard.appendChild(cardBottomPanel)

    const taskCardDate = document.createElement('div')
    taskCardDate.classList.add('taskCardDate')
    taskCardDate.innerHTML = task.date
    cardBottomPanel.appendChild(taskCardDate)

    task.element = taskCard
    task.completeBtn = taskCompletion
}
