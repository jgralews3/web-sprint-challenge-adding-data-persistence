const express = require('express')
const Resources = require('./resourcemodel')
const router = express.Router()

router.get('/', (req, res) => {
    Resources.find()
        .then(resources => {res.json(resources)})
        .catch(error => {res.status(500).json(error)})
})

router.get('/:id', (req, res) => {
    const {id} = req.params
    Resources.findById(id)
        .then(resource => {res.status(200).json(resource)})
        .catch(error => {res.status(500).json(error)})
})

router.post("/", (req, res) => {
    Resources.add(req.body)
        .then(() => {res.json(req.body)})
        .catch(error => {res.json(error)})
})

module.exports = router;