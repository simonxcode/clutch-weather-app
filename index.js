const express = require('express')
const cors = require('cors')
const rateLimit = require('express-rate-limit')
require('dotenv').config()
const errorHandler = require('./proxy-server/middleware/error')

const PORT = process.env.PORT || 8000

const app = express()

app.use(cors())

const limiter = rateLimit({
  windowMs: 30 * 1000, 
  max: 5,
})
app.use(limiter)
app.set('trust proxy', 1)

app.use(express.static('build'))

app.use('/weather', require('./proxy-server/routes/weather'))
app.use('/onecall', require('./proxy-server/routes/onecall'))

app.use(errorHandler)

app.listen(PORT)
