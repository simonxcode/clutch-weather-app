import { useState } from 'react'
import axios from 'axios'
import getCurrentDayForecast from '../helpers/getCurrentDayForecast'
import getCurrentDayDetailsItems from '../helpers/getCurrentDayDetailsItems'

const BASE_URL = 'https://api.openweathermap.org/data/2.5'
const API_KEY = process.env.REACT_APP_API_KEY

const useForecast = () => {
  const [forecast, setForecast] = useState(null)
  const [isError, setError] = useState(false)

  const getCoordinates = async (location) => {
    try {
      const { data } = await axios(`${BASE_URL}/weather`, { params: { q: location.value, appid: API_KEY } })
      return data
    } catch(data) { 
      if(!data.ok) {
        setError('There is not such location')
        return
      }
    }
  }

  const getForecastData = async (lat, lon) => {
    try {
      const { data } = await axios(`${BASE_URL}/onecall`, {params: {lat: lat, lon: lon, appid: API_KEY } })
      return data
    } catch(data) {
      if(!data.ok) {
        setError('Something went wrong')
        return
      }
    }   
  }

  const gatherForecastData = response => {
    const { temp } = response.main
    const currentDay = getCurrentDayForecast(response.name, response.dt, response.weather[0], temp)
    const { speed } = response.wind
    const currentDayDetails = getCurrentDayDetailsItems(response.main, speed)
    
    //debug
    console.log(speed)
    setForecast({ currentDay, currentDayDetails })
  }

  const submitRequest  = async location => {
    setError(false)

    const response = await getCoordinates(location) || {}
    if(!response.coord ) return
   
    const {lat, lon} = response.coord
    const data = await getForecastData(lat, lon)

    if(!data) return

    gatherForecastData(response)
  }
 
  return {
    isError,
    forecast,
    submitRequest,
  }

} 

export default useForecast
