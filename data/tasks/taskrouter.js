const express = require('express')
const Tasks = require('./taskmodel')
const router = express.Router()

router.get('/', (req, res) => {
    Tasks.find()
        .then(tasks => {res.json(tasks)})
        .catch(error => {res.status(500).json(error)})
})

router.get('/:id', (req, res) => {
    const {id} = req.params
    Tasks.findById(id)
        .then(task => {res.json(task)})
        .catch(error => {res.status(500).json(error)})
})

router.post("/", (req, res) => {
    Tasks.add(req.body)
        .then(task => {res.json(task)})
        .catch(error => {res.json(error)})
})

module.exports = router;