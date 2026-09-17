// Create an instance of the addProjectContainer so i can insert a button bellow (addNewProjectBtn)
const addProjectContainer = document.querySelector('.addProjectContainer')



// Create an instance of the taskDisplayTopPanel so i can insert a button bellow (addTaskBtn)
const taskDisplayTopPanel = document.querySelector('.taskDisplayTopPanel')

const addTaskBtn = document.createElement('button')
addTaskBtn.classList.add('taskAdd')
addTaskBtn.innerHTML = 'Add Task'
taskDisplayTopPanel.appendChild(addTaskBtn)

