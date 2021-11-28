import { useState } from 'react';
import axios from 'axios'

const BASE_URL = 'https://www.metaweather.com/api/location'
const CROSS_DOMAIN = 'https://the-ultimate-api-challenge.herokuapp.com'
const REQUEST_URL = `${CROSS_DOMAIN}/${BASE_URL}`

const useForecast = () => {
  const [isError, setError] = useState(false)
  const [forecast, setForecast] = useState(null)

  //call API
  const submitRequest = async location => {
    //1. get location
    const { data } = await axios(`${REQUEST_URL}/search`, { params: { query: location.value } })
     //2. get location weather
    console.log({ data })

    if(!data || data.length === 0) {
      setError('Could not find location')
      return
    }
 
    const response = await axios(`${REQUEST_URL}/${data[0].woeid}`)
    console.log({ response })
  }
  
  return {
    isError,
    forecast,
    submitRequest
  }
}

export default useForecast