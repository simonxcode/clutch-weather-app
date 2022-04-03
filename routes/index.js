const express = require('express')
const router = express.Router()
const needle = require('needle')

//Env vars
const REACT_APP_BASE_URL = process.env.REACT_APP_BASE_URL
const REACT_APP_KEY_NAME = process.env.REACT_APP_KEY_NAME
const REACT_APP_API_KEY = process.env.REACT_APP_API_KEY

router.get('/', async (req, res) => {
  try {
    const params = new URLSearchParams({
      [REACT_APP_KEY_NAME]: REACT_APP_API_KEY
    })

    const apiRes = await needle('get', `${REACT_APP_BASE_URL}?${params}`)
    const data = apiRes.body

    res.status(200).json(data)
  } catch(error) {
    res.status(500).json({ error })
  }
})

module.exports = router
