const express = require('express')
const cors = require('cors')
require('dotenv').config()
const errorHandler = require('./proxy-server/middleware/error')


const PORT = process.env.PORT || 8000

const app = express()
require('@cypress/code-coverage/middleware/express')(app)

app.use(cors())

app.use(express.static('build'))

app.use('/weather', require('./proxy-server/routes/weather'))
app.use('/onecall', require('./proxy-server/routes/onecall'))

app.use(errorHandler)

app.listen(PORT)
