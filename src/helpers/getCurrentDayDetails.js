import moment from 'moment'

const getCurrentDayDetails = (data, sun_rise, sun_set) => ({
  humidity: data.humidity,
  windSpeed: data.wind_speed,
  windDirection: data.wind_direction_compass,
  highTemp: data.max_temp,
  lowTemp: data.min_temp,
  // sunrise: moment(sun_rise).format('hh:mm A'),
  // sunset: moment(sun_set).format('hh:mm A')
})

export default getCurrentDayDetails