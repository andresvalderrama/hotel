
const hotel = require('./connection')

function Reservaciones () {
  return hotel('reservaciones')
}

function Habitaciones () {
  return hotel('habitaciones')
}

function getHabitaciones (reserva) {
  console.log(reserva)

  return hotel.raw('select habitaciones.id, habitaciones.tipo, habitaciones.numero_habitacion from `habitaciones` left join (select * from `reservaciones` where `reservaciones`.`registro` in (?, ?) or `reservaciones`.`salida` in (?, ?)) as habitaciones_reservadas on `habitaciones`.`id` = `habitaciones_reservadas`.`habitacion_id` where `habitaciones_reservadas`.`habitacion_id` is NULL', [String(reserva.registro), String(reserva.salida), String(reserva.registro), String(reserva.salida)])
}

function postReserva (reserva) {
  let _reserva = {
    registro: reserva.registro,
    salida: reserva.salida,
    habitacion_id: reserva.habitacion
  }
  return Reservaciones()
    .insert(_reserva)
    .returning()
}

module.exports = {
  getHabitaciones,
  postReserva
}
