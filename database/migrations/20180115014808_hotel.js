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
      table.string('registro')
      table.string('salida')
      table.integer('habitacion_id').unsigned()

      table.foreign('habitacion_id')
        .references('id').inTable('habitaciones')
    })
    .createTable('personas', table => {
      table.increments('id').primary().notNullable()
      table.string('nombre')
      table.string('apellidos')
      table.string('numero-documento')
      table.string('tipo-documento')
      table.integer('reserva_id').unsigned()

      table.foreign('reserva_id')
        .references('id').inTable('reservaciones')
    })
}

exports.down = (knex, Promise) => {
  return knex.schema
    .dropTableIfExists('personas')
    .dropTableIfExists('reservaciones')
    .dropTableIfExists('habitaciones')
}
