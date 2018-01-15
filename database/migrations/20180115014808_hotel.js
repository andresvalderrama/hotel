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
}

/*
knex('users')
.select(knex.raw('count(*) as user_count, status'))
.where(knex.raw(1))
.orWhere(knex.raw('status <> ?', [1]))
.groupBy('status')
Outputs:
select count(*) as user_count, status from `users` where 1 or status <> 1 group by `status`
*/


exports.down = (knex, Promise) => {
  return knex.schema
    .dropTableIfExists('reservaciones')
    .dropTableIfExists('habitaciones')
}
