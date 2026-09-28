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
        title: title, 
        date: date, 
        details: details, 
        priority: priority,
        element: null,
    }
}