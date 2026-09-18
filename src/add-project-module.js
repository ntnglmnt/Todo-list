const projectCard = {

    createCard: () => {

        function createNewProject(projectName) {
            projectName = prompt('Enter project name')
            return projectName
        }

        // Create an instance of the addProjectContainer so i can insert a button bellow (addNewProjectBtn)
        const addProjectContainer = document.querySelector('.addProjectContainer')
        addProjectContainer.innerHTML = 'New project'

        const addNewProjectBtn = document.createElement('button')
        addNewProjectBtn.classList.add('projectAdd')
        addNewProjectBtn.innerHTML = '+'
        addProjectContainer.appendChild(addNewProjectBtn)
        addNewProjectBtn.addEventListener('click', function createCard() {

            const sidebarContainer = document.querySelector('.sidebarProjectDisplayContainer')

            let card = document.createElement('button')
            card.classList.add('projectCard')
            sidebarContainer.appendChild(card)

            const cardName = document.createElement('div')
            cardName.classList.add('cardName')
            cardName.innerHTML = createNewProject()
            card.appendChild(cardName)
            // card.addEventListener('click', )

            projectCard.editCardName(card, cardName)
            projectCard.removeCard(card)
        })
    },

    removeCard: (card) => {

        // remove the card completely from the list

        const removeCardBtn = document.createElement('button')
        removeCardBtn.classList.add('removeCardButton')
        removeCardBtn.innerHTML = 'x'
        card.appendChild(removeCardBtn)

        removeCardBtn.addEventListener('click', () => {
            card.remove()
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

generateButton = projectCard.createCard()
