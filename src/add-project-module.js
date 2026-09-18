const projectCard = {

    createCard: () => {

        function createNewProject(projectName) {
            projectName = prompt('Enter project name')
            return projectName
        }

        // Create an instance of the addProjectContainer so i can insert a button bellow (addNewProjectBtn)
        const addProjectContainer = document.querySelector('.addProjectContainer')

        const addNewProjectBtn = document.createElement('button')
        addNewProjectBtn.classList.add('projectAdd')
        addNewProjectBtn.innerHTML = 'Add Project'
        addProjectContainer.appendChild(addNewProjectBtn)
        addNewProjectBtn.addEventListener('click', function createCard() {

            const sidebarContainer = document.querySelector('.sidebarProjectDisplayContainer')

            let card = document.createElement('div')
            card.classList.add('projectCard')
            sidebarContainer.appendChild(card)
            card.innerHTML = createNewProject()

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

}

generateButton = projectCard.createCard()
