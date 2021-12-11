import { useState } from 'react';
import axios from 'axios'

import getCurrentDayForecast from '../helpers/getCurrentDayForecast';

const BASE_URL = 'https://www.metaweather.com/api/location'
const CROSS_DOMAIN = 'https://the-ultimate-api-challenge.herokuapp.com'
const REQUEST_URL = `${CROSS_DOMAIN}/${BASE_URL}`

const useForecast = () => {
  const [isError, setError] = useState(false)
  const [forecast, setForecast] = useState(null)

  const getWoeid = async location => {
    const { data } = await axios(`${REQUEST_URL}/search`, { params: { query: location.value } })
    if(!data || data.length === 0) {
      setError('Could not find location')
      return
    }
    return data[0]
  } 

  const getForecastData = async woeid => {
    const { data } = await axios(`${REQUEST_URL}/${woeid}`)
    if (!data || data.length === 0) {
      setError('Something went wrong')
      return
    }
    return data
  }

  const gatherForecastData = data => {
    const currentDay = getCurrentDayForecast(data.consolidated_weather[0], data.title)
    setForecast({ currentDay })
  }

  const submitRequest = async location => {
    setError(false)
    const response = await getWoeid(location)
    if(!response?.woeid) return

    const data = await getForecastData(response.woeid)
    if(!data) return

    gatherForecastData(data)
  }
  
  return {
    isError,
    forecast,
    submitRequest
  }
}

export default useForecast