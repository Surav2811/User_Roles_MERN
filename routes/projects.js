const express = require('express')
const router= express.Router()
const {projects} = require('../data')

router.get('/', (req, res) =>{
    res.json (projects)
})

router.get('/:id', setProject, (req, res) => {
    res.json(req.project)
})

function setProject (req, res, next) {
    const id = parseInt(req.params.id)
    req.project = projects.find(project => project.id === id)

    if (req.project == null) {
        res.sendStatus(404)
        return res.send('Project not found')
    }
    next()
}

module.exports = router