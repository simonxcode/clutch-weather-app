const url = require('url')
const express = require('express')
const router = express.Router()
const needle = require('needle')
const apicache = require('apicache')

//Env vars
const BASE_URL = process.env.REACT_APP_BASE_URL
const KEY_NAME = process.env.REACT_APP_KEY_NAME
const API_KEY = process.env.REACT_APP_API_KEY

//Init cache
let cache = apicache.middleware

router.get('/', cache('2 minutes'), async (req, res, next) => { 
  try {
    const params = new URLSearchParams({
      ...url.parse(req.url, true).query,
      [KEY_NAME]: API_KEY
    })

    const apiRes = await needle('get', `${BASE_URL}?${params}`)
    const data = apiRes.body

    //Log request to public API 
    if(process.env.NODE_ENV !== 'production') {
      console.log(`REQUEST: ${BASE_URL}?${params}`)
    }

    res.status(200).json(data)
  } catch(error) {
    next(error)
  }
})

module.exports = router
