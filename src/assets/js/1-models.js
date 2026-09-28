// Contains the structure of a project and task exclusively as data

function createProject(name) {
    return {
        name: name,
        tasks: [],
        card: null,
        cardDisplay: null
    }
}

function createTask(title, date, details, priority) {
    return { 
        title: prompt('select title'), 
        date: prompt('select date'), 
        details: prompt('add details'), 
        priority: prompt('select priority'),
        element: null,
    }
}