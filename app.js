const path = require('path')

const express = require('express')
const logger = require('morgan')
const bodyParser = require('body-parser')
const hbs = require('express-hbs')

const server = require('./routes/server')
const api = require('./routes/api')

require('./database/connection')
const app = express()

app.engine('hbs', hbs.express4({
  partialsDir: path.join(__dirname, 'views/partials'),
  layoutsDir: path.join(__dirname, 'views/layouts'),
  beautify: true
}))
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'hbs')

app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use(express.static(path.join(__dirname, 'public')))

app.use('/api/v1/', api)
app.use('/', server)

// catch 404 and forward to error handler
app.use((req, res, next) => {
  var err = new Error('Not Found')
  err.status = 404
  next(err)
})

// error handler
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}

  // render the error page
  res.status(err.status || 500)
  res.render('errors/template')
})

module.exports = app
