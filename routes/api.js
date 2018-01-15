const router = require('express').Router()

const queries = require('../database/queries')

router.get('/reservas', (req, res, next) => {
  queries.getReservaciones()
    .then(reservaciones => res.json(reservaciones))
    .catch(error => next(error))
})

module.exports = router
