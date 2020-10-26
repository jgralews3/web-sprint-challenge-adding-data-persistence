const db = require('../config')

function find(){
    return db('resources')
}

function findById(id){
    return db('resources').where("id", id)
}

function add(resource){
    return db('resources').insert(resource)
}

module.exports = {
    find, findById, add
}