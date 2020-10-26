const db = require('../config')

function find(){
    return db('projects')
}

function findById(id){
    return db('projects').where("id", id)
}

function add(project){
    return db('projects').insert(project)
}

module.exports = {
    find, findById, add
}