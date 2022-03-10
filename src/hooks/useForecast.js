// import { useState } from 'react';
// import axios from 'axios'
// import getCurrentDayForecast from '../helpers/getCurrentDayForecast';
// import getCurrentDayDetails from '../helpers/getCurrentDayDetailsItems';
// import getUpcomingDays from '../helpers/getUpcomingDays'

// const BASE_URL = 'https://www.metaweather.com/api/location'
// const CROSS_DOMAIN = 'https://the-ultimate-api-challenge.herokuapp.com'
// const REQUEST_URL = `${CROSS_DOMAIN}/${BASE_URL}`

// const useForecast = () => {
//   const [isError, setError] = useState(false)
//   const [forecast, setForecast] = useState(null)

//   const getWoeid = async location => {
//     const { data } = await axios(`${REQUEST_URL}/search`, { params: { query: location.value } })
//     if(!data || data.length === 0) {
//       setError('Could not find location')
//       return
//     }
//     console.log('woeid', data[0].woeid)
//     console.log('request location id', data[0])
//     return data[0]
//   } 

//   const getForecastData = async woeid => {
//     const { data } = await axios(`${REQUEST_URL}/${woeid}`)
//     if (!data || data.length === 0) {
//       setError('Something went wrong')
//       return
//     }
//     console.log('request data', data)
//     return data
//   }

//   const gatherForecastData = data => {
//     const currentDay = getCurrentDayForecast(data.consolidated_weather[0], data.title)
//     const currentDayDetails = getCurrentDayDetails(data.consolidated_weather[0])
//     const upcomingDays = getUpcomingDays(data.consolidated_weather)
//     setForecast({
//       currentDay,
//       currentDayDetails,
//       upcomingDays
//     })
//   }

//   const submitRequest = async location => {
//     setError(false)
//     const response = await getWoeid(location)
//     if(!response?.woeid) return

//     const data = await getForecastData(response.woeid)
//     if(!data) return

//     gatherForecastData(data)
//     console.log('render data', data)
//   }
  
//   return {
//     isError,
//     forecast,
//     submitRequest
//   }
// }

// export default useForecast

//Open Weather API
import { useState } from 'react'
import axios from 'axios'

const BASE_URL = 'https://api.openweathermap.org/data/2.5'
const API_KEY = process.env.REACT_APP_API_KEY

const useForecast = () => {
  const [forecast, setForecast] = useState(null)
  const [isError, setError] = useState(false)

  //call api
  const submitRequest  = async location => {
    //1. get lat and lon 
    const { data } = await axios(`${BASE_URL}/weather`, { params: { q: location.value, appid: API_KEY } })
    console.log({ data })
    //1a. handle error if there is not data
    if(!data || data.length === 0) {
      setError('There is no such location')
    }
    //1b; destructure coor and get lat and lon values
    const { lat, lon } = data.coord

    //2. get weather
    const response = await axios(`${BASE_URL}/onecall`, {params: {lat: lat, lon: lon, appid: API_KEY } })
    console.log({ response })
  }

  return {
    submitRequest,
    isError
  }
} 

export default useForecast
