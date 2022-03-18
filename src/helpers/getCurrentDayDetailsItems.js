import moment from 'moment'

const mpsToMph = speed => {
  return  (speed * 2.23).toFixed(1)
} 

const degreeToCompass  = deg => {
  const directions = ['N', 'NE', 'E', 'SE', 'S', 'SW', 'W', 'NW']
  return directions[Math.round(deg/45) % 8]
}

const compassToArrow = deg => {
  const arrows = ['↑', '↗', '→', '↘', '↓', '↙', '←', '↖']
  return arrows[Math.round(deg / 45) % 8]
}

const kelvinToFarenheit = temp => {
  return ((temp - 273.15) * 1.8 + 32.0).toFixed(0)
}

const getCurrentDayDetailsItems = (response, speed, deg, sunrise, sunset) => [
  {
    name: 'humidity',
    value: response.humidity,
    unit: '%'
  }, 
  {
    name: 'wind',
    value: mpsToMph(speed),
    unit: 'mph'
  },
  {
    name: 'wind direction',
    value: degreeToCompass(deg),
    unit: compassToArrow(deg)
  },
  {
    name: 'high',
    value: kelvinToFarenheit(response.temp_max),
    unit: '°F'
  },
  {
    name: 'low',
    value: kelvinToFarenheit(response.temp_min),
    unit: '°F'
  },
  {
    name: 'sunrise',
    value: moment.unix(sunrise).format('h:mm'),
    unit: 'am'
  },
  {
    name: 'sunset',
    value: moment.unix(sunset).format('h:mm'),
    unit: 'pm'
  }
]

export default getCurrentDayDetailsItems
