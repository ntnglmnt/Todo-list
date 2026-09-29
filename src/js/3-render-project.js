// Handles DOM generation for the projects

export function renderProjectCard(project) {

    const cardDisplay = document.createElement('div')
    cardDisplay.classList.add('cardDisplay')

    const projectCard = document.createElement('button')
    projectCard.classList.add('projectCard')
    cardDisplay.appendChild(projectCard)

    const projectCardButtonContainer = document.createElement('div')
    projectCardButtonContainer.classList.add('projectCardButtonContainer')
    projectCard.appendChild(projectCardButtonContainer)

    const editNameBtn = document.createElement('button')
    editNameBtn.classList.add('editNameBtn')
    editNameBtn.innerHTML = 'Edit'
    projectCardButtonContainer.appendChild(editNameBtn)

    const deleteProjectBtn = document.createElement('button')
    deleteProjectBtn.classList.add('deleteProjectBtn')
    deleteProjectBtn.innerHTML = 'x'
    projectCardButtonContainer.appendChild(deleteProjectBtn)

    const projectNameContainer = document.createElement('div')
    projectNameContainer.classList.add('projectNameContainer')
    projectNameContainer.innerHTML = project.name
    projectCard.appendChild(projectNameContainer)
       
    

    project.card = projectCard
    project.cardDisplay = cardDisplay
    project.deleteProjectBtn = deleteProjectBtn
    project.editNameBtn = editNameBtn
}




