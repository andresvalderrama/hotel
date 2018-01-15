exports.up = (knex, Promise) => {
  return knex.schema.createTable('habitaciones', table => {
    table.increments()
    table.integer('numero_habitacion').notNullable()
    table.string('tipo').notNullable()

    table.unique('numero_habitacion')
  })
}

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('habitaciones')
}
