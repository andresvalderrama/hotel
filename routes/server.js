const router = require('express').Router()

router.get('/', (req, res, next) => {
  res.render('home/template', { pageClass: 'home' })
})

router.post('/reserva/crear', (req, res, next) => {
  res.redirect('/reserva/creada')
})

router.get('/reserva/creada', (req, res, next) => {
  res.render('reserva/creada/template')
})

module.exports = router
