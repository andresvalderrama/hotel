
const hotel = require('./connection')

function Reservaciones () {
  return hotel('reservaciones')
}

function Personas () {
  return hotel('personas')
}

function Habitaciones () {
  return hotel('habitaciones')
}

function getHabitaciones (reserva) {
  let _registro = String(reserva.registro)
  let _salida = String(reserva.salida)

  return hotel.raw('select habitaciones.id, habitaciones.tipo, habitaciones.numero_habitacion from `habitaciones` left join (select * from `reservaciones` where `reservaciones`.`registro` in (?, ?) or `reservaciones`.`salida` in (?, ?)) as habitaciones_reservadas on `habitaciones`.`id` = `habitaciones_reservadas`.`habitacion_id` where `habitaciones_reservadas`.`habitacion_id` is NULL', [_registro, _salida, _registro, _salida])
}

function postReserva (reservacion) {
  let _reserva = {
    registro: reservacion.reserva.registro,
    salida: reservacion.reserva.salida,
    habitacion_id: reservacion.reserva.habitacion
  }
  let _huespedes = reservacion.huespedes

  return Reservaciones()
    .returning()
    .insert(_reserva)
    .catch(error => console.error(error))
    .then((id) => {
      _huespedes.forEach(element => { element['reserva_id'] = id[0] })

      return Personas()
        .returning()
        .insert(_huespedes)
    })
}

module.exports = {
  getHabitaciones,
  postReserva
}
