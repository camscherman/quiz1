const kx = require('knex')({
    client: 'pg',
    connection: {
        database: 'cluckr'
    }
})

module.exports = kx