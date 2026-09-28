// Handles DOM generation for the projects


        // removeCardBtn.addEventListener('click', (event) => {
        //     event.stopPropagation()
        //     card.remove()
        //     cardDisplay.remove()
        // })

    // editCardName: (card, cardName) => {

    //     function createNewProject(projectName) {
    //         projectName = prompt('Enter project name')
    //         return projectName
    //     }

function renderProjectCard(project) {

    const cardDisplay = document.createElement('div')
    cardDisplay.classList.add('cardDisplay')

    const projectCard = document.createElement('button')
    projectCard.classList.add('projectCard')
    
    const removeCardBtn = document.createElement('button')
    removeCardBtn.classList.add('removeCardButton')
    removeCardBtn.innerHTML = 'x'
    projectCard.appendChild(removeCardBtn)

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
    project.removeCardBtn = removeCardBtn
    project.editNameBtn = editNameBtn
}




