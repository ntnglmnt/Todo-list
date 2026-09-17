
// Create an instance of the addProjectContainer so i can insert a button bellow (addNewProjectBtn)
const addProjectContainer = document.querySelector('.addProjectContainer')

const addNewProjectBtn = document.createElement('button')
addNewProjectBtn.classList.add('projectAdd')
addNewProjectBtn.innerHTML = 'Add Project'
addProjectContainer.appendChild(addNewProjectBtn)

// Create an instance of the taskDisplayTopPanel so i can insert a button bellow (addTaskBtn)
const taskDisplayTopPanel = document.querySelector('.taskDisplayTopPanel')

const addTaskBtn = document.createElement('button')
addTaskBtn.classList.add('taskAdd')
addTaskBtn.innerHTML = 'Add Task'
taskDisplayTopPanel.appendChild(addTaskBtn)
