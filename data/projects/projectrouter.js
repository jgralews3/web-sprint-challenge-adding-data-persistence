const express = require('express')
const Projects = require('./projectmodel')
const router = express.Router()

router.get('/', (req, res) => {
    Projects.find()
        .then(projects => {res.json(projects)})
        .catch(error => {res.status(500).json(error)})
})

router.get('/:id', (req, res) => {
    const {id} = req.params
    Projects.findById(id)
        .then(project => {res.json(project)})
        .catch(error => {res.status(500).json(error)})
})

router.post("/", (req, res) => {
    Projects.add(req.body)
        .then(project => {res.json(project)})
        .catch(error => {res.json(error)})
})

module.exports = router;