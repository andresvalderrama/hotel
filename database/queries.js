const hotel = require('./connection')

function Reservaciones () {
  return hotel('reservaciones')
}

function getReservaciones (data) {
  return Reservaciones()
    .select('*')
}

module.exports = {
  getReservaciones
}
