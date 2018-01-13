const router = require('express').Router()

router.get('/', (req, res, next) => {
  res.render('home/template', { title: 'Express' })
})

module.exports = router
