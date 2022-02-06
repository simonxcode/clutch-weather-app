const getCurrentDayDetailsItems = (data, sun_rise, sun_set) => [
  {
    name: 'humidity',
    value: data.humidity,
    unit: '%'
  }, 
  {
    name: 'wind',
    value: Math.round(data.wind_speed),
    unit: 'mph'
  },
  {
    name: 'wind direction',
    value: data.wind_direction_compass,
    unit: 'NA'
  },
  {
    name: 'high',
    value: Math.round(data.max_temp),
    unit: '°C'
  },
  {
    name: 'low',
    value: Math.round(data.min_temp),
    unit: '°C'
  },
  {
    name: 'sun rise',
    value: sun_rise,
    unit: 'am'
  },
  {
    name: 'sun set',
    value: sun_set,
    unit: 'pm'
  }
]

export default getCurrentDayDetailsItems
