const hotel = require('./connection')

function Reservaciones () {
  return hotel('habitaciones')
}

function getReservaciones (data) {
  return Reservaciones()
    .select('*')
}

module.exports = {
  getReservaciones
}
