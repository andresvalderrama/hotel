exports.seed = (knex, Promise) => {
  return knex('habitaciones').del()
    .then(() => {
      const data = [
        { numero_habitacion: 101,
          tipo: 'standard' },
        { numero_habitacion: 102,
          tipo: 'standard' },
        { numero_habitacion: 103,
          tipo: 'standard' },
        { numero_habitacion: 104,
          tipo: 'standard' },
        { numero_habitacion: 105,
          tipo: 'standard' },
        { numero_habitacion: 201,
          tipo: 'preferencial' },
        { numero_habitacion: 202,
          tipo: 'preferencial' },
        { numero_habitacion: 203,
          tipo: 'preferencial' },
        { numero_habitacion: 204,
          tipo: 'preferencial' },
        { numero_habitacion: 205,
          tipo: 'preferencial' },
        { numero_habitacion: 206,
          tipo: 'preferencial' },
        { numero_habitacion: 301,
          tipo: 'suite' },
        { numero_habitacion: 302,
          tipo: 'suite' },
        { numero_habitacion: 303,
          tipo: 'suite' },
        { numero_habitacion: 304,
          tipo: 'suite' }
      ]
      return knex('habitaciones').insert(data)
    })
}
