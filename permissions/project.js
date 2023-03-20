const { ROLE, projects } = require('../data')

function canViewProject(user, project) {
    return (
        user.role === ROLE.ADMIN ||
        project.userId === user.id
    )
}

function scopedProjects(user, projects){
    if (user.role === ROLE.ADMIN) return projects
    return Object.values(projects).filter(project => projects.userId === user.id)
}

module.exports = {
    canViewProject,
    scopedProjects
}