const db = require('../config')

function find(){
    return db('tasks')
        .innerJoin("projects", "tasks.project_id", "projects.id")
        .select('projects.name as project', 'tasks.description', 'tasks.notes', 'tasks.id')
}

function findById(id){
    return db('tasks')
        .innerJoin("projects", "tasks.project_id", "projects.id")
        .where("tasks.id", id)
        .select('projects.name as project', 'tasks.description', 'tasks.notes', 'tasks.id')
}

function add(task){
    return db('tasks').insert(task)
}

module.exports = {
    find, findById, add
}