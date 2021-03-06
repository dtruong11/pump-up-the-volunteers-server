const table = 'volunteers_options'
exports.seed = knex => {
  return knex(table).del()
    .then(() => {
      return knex(table).insert([{
            vol_id: 1,
            option_id: 2
          }, {
            vol_id: 1,
            option_id: 4
          },
          {
            vol_id: 2,
            option_id: 3
          }
        ])
        .then(() => {
          return knex.raw(`SELECT setval('${table}_id_seq', (SELECT MAX(id) FROM ${table}));`)
        })
    })
};