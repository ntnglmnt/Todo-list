const controller = {

    createCard: () => {

        function createNewProject(projectName) {
            projectName = prompt('Enter project name')
            return projectName
        }

        const addProjectContainer = document.querySelector('.addProjectContainer')
        addProjectContainer.innerHTML = 'New project'

        const addNewProjectBtn = document.createElement('button')
        addNewProjectBtn.classList.add('projectAdd')
        addNewProjectBtn.innerHTML = '+'
        addProjectContainer.appendChild(addNewProjectBtn)
        addNewProjectBtn.addEventListener('click', function createCard(cardLink) {

            const sidebarContainer = document.querySelector('.sidebarProjectDisplayContainer')

            let card = document.createElement('button')
            card.classList.add('projectCard')
            sidebarContainer.appendChild(card)
            card.addEventListener('click', () => {
                taskCardContainer.replaceChildren(cardDisplay)
            })

            const taskCardContainer = document.querySelector('.taskCardContainer')

            const cardDisplay = document.createElement('div')
            cardDisplay.classList.add('cardDisplay')
            taskCardContainer.replaceChildren(cardDisplay)

            const cardName = document.createElement('div')
            cardName.classList.add('cardName')
            cardName.innerHTML = createNewProject()
            cardLink = cardName.innerHTML
            card.appendChild(cardName)

            controller.editCardName(card, cardName)
            controller.removeCard(card)
        })
    },

    removeCard: (card,cardDisplay) => {

        // remove the card completely from the list

        const removeCardBtn = document.createElement('button')
        removeCardBtn.classList.add('removeCardButton')
        removeCardBtn.innerHTML = 'x'
        card.appendChild(removeCardBtn)

        removeCardBtn.addEventListener('click', () => {
            card.remove()
            card.cardDisplay.remove()
        })
    },

    editCardName: (card, cardName) => {

        function createNewProject(projectName) {
            projectName = prompt('Enter project name')
            return projectName
        }

        // change the name of the card
        const editNameBtn = document.createElement('button')
        editNameBtn.classList.add('editNameBtn')
        editNameBtn.innerHTML = 'Edit'
        card.appendChild(editNameBtn)

        editNameBtn.addEventListener('click', () => {
            cardName.innerHTML = createNewProject()
        })

    }

}

controller.createCard()
