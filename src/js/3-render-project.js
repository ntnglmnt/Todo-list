// Handles DOM generation for the projects

export function renderProjectCard(project) {

    const cardDisplay = document.createElement('div')
    cardDisplay.classList.add('cardDisplay')

    const projectCard = document.createElement('button')
    projectCard.classList.add('projectCard')
    cardDisplay.appendChild(projectCard)

    const projectNameContainer = document.createElement('div')
    projectNameContainer.classList.add('projectNameContainer')
    projectNameContainer.innerHTML = project.name
    projectCard.appendChild(projectNameContainer)
    
    const editNameBtn = document.createElement('button')
    editNameBtn.classList.add('editNameBtn')
    editNameBtn.innerHTML = 'Edit'
    projectCard.appendChild(editNameBtn)

    const deleteProjectBtn = document.createElement('button')
    deleteProjectBtn.classList.add('deleteProjectBtn')
    deleteProjectBtn.innerHTML = 'x'
    projectCard.appendChild(deleteProjectBtn)

    project.card = projectCard
    project.cardDisplay = cardDisplay
    project.deleteProjectBtn = deleteProjectBtn
    project.editNameBtn = editNameBtn
}




