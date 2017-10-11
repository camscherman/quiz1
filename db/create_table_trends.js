const kx = require('./connection')
// Use Knex to a create table to hold clucks, Cluckr's equivalent of tweets. Clucks should have the following fields:
// 
// A username
// An image_path
// A content
// A self- increment unique id
// created_at and updated_at timestamps

kx.schema.createTable('trends', table => {
    table.increments('id')
    table.string('trend_word')
    table.integer('count')
}).then(() => process.exit())
    .catch(() => process.exit())

module.exports = kx    