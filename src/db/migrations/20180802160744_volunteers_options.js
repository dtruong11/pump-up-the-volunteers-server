const table = 'volunteers_options'
exports.up = knex => {
    return knex.schema.createTable(table, table => {
        table.increments()
        table.integer('vol_id').notNullable().defaultsTo(0)
        table.integer('option_id').notNullable().defaultsTo(0)
        table.foreign('vol_id').references('volunteers.id').onDelete('CASCADE')
        table.foreign('option_id').references('options.id').onDelete('CASCADE')
    })
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTable(table)
};