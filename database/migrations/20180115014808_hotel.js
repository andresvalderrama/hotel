exports.up = (knex, Promise) => {
  return knex.schema
    .createTable('habitaciones', table => {
      table.increments('id').primary().notNullable()
      table.integer('numero_habitacion').notNullable()
      table.string('tipo').notNullable()

      table.unique('numero_habitacion')
    })
    .createTable('reservaciones', table => {
      table.increments('id').primary().notNullable()
      table.integer('registro').notNullable()
      table.integer('salida').notNullable()
      table.integer('habitacion_id').unsigned()

      table.foreign('habitacion_id')
        .references('id').inTable('habitaciones')
    })
}

exports.down = (knex, Promise) => {
  return knex.schema
    .dropTableIfExists('habitaciones')
    .dropTableIfExists('reservaciones')
}
