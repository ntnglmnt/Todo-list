// Handles the eventlisteners for projects

function distributeEventlisteners(project) {

    project.deleteProjectBtn.addEventListener('click', (event) => {
        event.stopPropagation()
        project.remove()
    })

    project.editNameBtn.addEventListener('click', (event) => {
        
        let newProjectname = prompt('Enter new project name')
        project.name = newProjectname
        
    })
}