const router = require('express').Router()

const queries = require('../database/queries')

router.post('/reservas/crear', (req, res, next) => {
  let reservacion = req.body
  queries.postReserva(reservacion)
    .then(reserva => res.json(reserva))
    .catch(error => {
      next(error)
    })
})

router.post('/reservas', (req, res, next) => {
  queries.getHabitaciones(req.body.reserva)
    .then(rawData => {
      let reservaciones = []

      rawData[0].forEach(element => reservaciones.push(element))
      res.json(reservaciones)
    })
    .catch(error => {
      next(error)
    })
})

module.exports = router
