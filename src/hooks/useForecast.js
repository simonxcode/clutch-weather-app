import { useState } from 'react'
import axios from 'axios'
import getCurrentDayForecast from '../helpers/getCurrentDayForecast'
import getCurrentDayDetailsItems from '../helpers/getCurrentDayDetailsItems'
import getUpcomingDays from '../helpers/getUpcomingDays'

const useForecast = () => {
  const [isLoading, setLoading] = useState(false)
  const [isError, setError] = useState(false)
  const [forecast, setForecast] = useState(null)

  const getCoordinates = async location => {   
    const url = `/weather?q=${location.value}`

    try {
      const { data } = await axios(url)
      return data
    } catch(data) { 
      if(!data.ok) {
        setError('unable to find location')
        setLoading(false)
        return
      }
    }
  }

  const getForecastData = async (lat, lon) => {
    const url = `/onecall?lat=${lat}&lon=${lon}`

    try {
      const { data } = await axios(url)
      return data
    } catch(data) {
      if(!data.ok) {
        setError('something went wrong')
        setLoading(false)
        return
      }
    }   
  }

  const gatherForecastData = async (response, data) => {
    const { dt } = data.current
    const { temp } = response.main
    const { country } = response.sys
    const currentDay = getCurrentDayForecast(response.name, dt, data, response.weather[0], temp, country)

    const { speed } = response.wind
    const { deg } = response.wind
    const { sunrise } = response.sys
    const { sunset } = response.sys
    const currentDayDetails = getCurrentDayDetailsItems(response.main, speed, deg, sunrise, sunset, data)
    
    const {timezone } = data
    const upcomingDays = getUpcomingDays(data.daily, timezone)
   
    setForecast({ currentDay, currentDayDetails, upcomingDays })
    setLoading(false)
  }

  const submitRequest  = async location => {
    setLoading(true)
    setError(false)

    const response = await getCoordinates(location) || {}
    if(!response.coord ) return
   
    const {lat, lon} = response.coord
    const data = await getForecastData(lat, lon)
    if(!data) return

    gatherForecastData(response, data)
  }
 
  return {
    isLoading,
    isError,
    forecast,
    submitRequest,
  }
} 

export default useForecast
