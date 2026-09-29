// Handles the eventlisteners for projects

import { createProject } from './1-models.js'
import { appState } from './2-state.js'
import { renderProjectCard } from './3-render-project.js'


export function initProjectControls() {
    document.querySelector('.addProjectBtn').addEventListener('click', () => {
        const name = prompt('Enter project name')
        if (!name) return
        createNewProject(name)
    })
}

initProjectControls();


export function switchToProject(project) {
    
    console.log('hello')

    // document.querySelector('.taskCardContainer').replaceChildren(project.cardDisplay)
    // appState.activeProject = project
}

export function distributeEventlisteners(project) {

    project.card.addEventListener('click', () => {
        switchToProject(project)
    })

    project.deleteProjectBtn.addEventListener('click', (event) => {

        event.stopPropagation()
        project.card.remove()
        project.cardDisplay.remove()
        appState.projects = appState.projects.filter(p => p !== project)
    })

    project.editNameBtn.addEventListener('click', (event) => {

        event.stopPropagation()
        const newProjectName = prompt('Enter new project name')
        if (!newProjectName) return
        project.name = newProjectName
        project.card.querySelector('.projectNameContainer').innerHTML = project.name

    })
}

export function createNewProject(name) {

    const project = createProject(name)
    renderProjectCard(project)
    distributeEventlisteners(project)
    appState.projects.push(project)
    switchToProject(project)

    document.querySelector('.projectCardDisplay').appendChild(project.cardDisplay)
}