import { useState } from 'react';
import axios from 'axios'

const BASE_URL = 'https://www.metaweather.com/api/location'
const CROSS_DOMAIN = 'https://the-ultimate-api-challenge.herokuapp.com'
const REQUEST_URL = `${CROSS_DOMAIN}/${BASE_URL}`

const useForecast = () => {
  const [forecast, setForecast] = useState(null)

  const submitRequest = async location => {
    const response = await axios(`${REQUEST_URL}/search`, { params: { query: location.value } })
    console.log({ response })
  }
  
  return {
    forecast,
    submitRequest
  }
}

export default useForecast