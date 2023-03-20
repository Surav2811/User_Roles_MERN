const {projects} = require('../data')
const { canViewProject,scopedProjects } = require('../permissions/project')
const { authUser } = require('../basicAuth')

const express = require('express')
const router= express.Router()

router.get('/',authUser, authGetProject,scopedProjects, (req, res) =>{
    res.json (projects)
})

router.get('/:id', (req, res) => {
    res.json(scopedProjects(req.user, projects))
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

function authGetProject (req, res, next) {
    if (!canViewProject(req.user, req.project)) {
        res.status(401)
        return res.send('Not allowed')
    }
    next()
}

module.exports = router