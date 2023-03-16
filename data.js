const ROLE= {
    ADMIN: 'admin',
    BASIC: 'basic'
}

module.exports = {
    users: [
        {id: 1, name: 'Saurav', role:ROLE.ADMIN},
        {id: 2, name: 'Sandeep', role:ROLE.BASIC},
        {id: 3, name: 'Shiva', role:ROLE.BASIC}
    ],
    projects: [
        {id: 1, name: 'Saurav Project', userId: 1},
        {id: 2, name: 'Sandeep Project', userId: 2},
        {id: 3, name: 'Shiva Project', userId: 3}
    ]
}