import { useState } from 'react'
import axios from 'axios'
import getCurrentDayForecast from '../helpers/getCurrentDayForecast'

const BASE_URL = 'https://api.openweathermap.org/data/2.5'
const API_KEY = process.env.REACT_APP_API_KEY

const useForecast = () => {
  const [forecast, setForecast] = useState(null)
  const [isError, setError] = useState(false)

  const getCoordinates = async (location) => {
    const { data } = await axios(`${BASE_URL}/weather`, { params: { q: location.value, appid: API_KEY } })
    if(!data || data.length === 0) {
      setError('There is no such location')
      return
    }
    return data
  }

  const getForecastData = async (lat, lon) => {
       const { data } = await axios(`${BASE_URL}/onecall`, {params: {lat: lat, lon: lon, appid: API_KEY } })

       if(!data || data.length === 0) {
         setError('Something went wrong')
         return
       }
       return data
  }

  const gatherForecastData = response => {
    const currentDay = getCurrentDayForecast(response.name)

    setForecast({ currentDay })
  }

  const submitRequest  = async location => {
    setError(false)

    const response = await getCoordinates(location)
    const {lat, lon} = response.coord

    if(!response || !lat || !lon) return
    console.log('getCoordinates', { response })
   
    const data = await getForecastData(lat, lon)
    if(!data) return
    console.log('getForecastData', { data })

    gatherForecastData(response)
  }
 
  return {
    isError,
    forecast,
    submitRequest,
  }
} 

export default useForecast
