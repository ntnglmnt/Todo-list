const projectCard = {

    createCard: () => {

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

            const deleteCard = document.createElement('button')

            function createNewProject(projectName) {
                projectName = prompt('Enter project name')
                console.log(projectName)
                return projectName
            }

        })
    },

}

generateButton = projectCard.createCard()