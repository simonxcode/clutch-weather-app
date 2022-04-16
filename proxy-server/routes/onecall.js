const express = require('express')
const router = express.Router()
const url = require('url')
const needle = require('needle')

const BASE_URL = process.env.REACT_APP_BASE_URL
const API_KEY = process.env.REACT_APP_API_KEY

router.get('/', async (req, res, next) => {
  try {
    const params = new URLSearchParams({
      ...url.parse(req.url, true).query, 
      appid: API_KEY 
    })

    const apiRes = await needle('get', `${BASE_URL}/onecall?${params}&exclude={minutely,hourly,alerts}`)
    const data = apiRes.body

    res.status(200).json(data)
  } catch(error) {
    next(error)
  }
})

module.exports = router
