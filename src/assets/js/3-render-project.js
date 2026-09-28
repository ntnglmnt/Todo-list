// Handles DOM generation for the projects

function renderProjectCard(project) {

    const cardDisplay = document.createElement('div')
    cardDisplay.classList.add('cardDisplay')

    const projectCard = document.createElement('button')
    projectCard.classList.add('projectCard')
    
    const deleteProjectBtn = document.createElement('button')
    deleteProjectBtn.classList.add('removeCardButton')
    deleteProjectBtn.innerHTML = 'x'
    projectCard.appendChild(deleteProjectBtn)

    const editNameBtn = document.createElement('button')
    editNameBtn.classList.add('editNameBtn')
    editNameBtn.innerHTML = 'Edit'
    projectCard.appendChild(editNameBtn)

    const projectNameContainer = document.createElement('div')
    projectNameContainer.classList.add('projectNameContainer')
    projectNameContainer.innerHTML = project.name
    projectCard.appendChild(projectNameContainer)

    project.card = projectCard
    project.display = cardDisplay
    project.deleteProjectBtn = deleteProjectBtn
    project.editNameBtn = editNameBtn
}




