const getCurrentDayDetailsItems = (response, speed) => [
  {
    name: 'humidity',
    value: response.humidity,
    unit: '%'
  }, 
  {
    name: 'wind',
    value: speed,
    unit: 'm/s'
  },
  // {
  //   name: 'wind direction',
  //   value: data.wind_direction_compass,
  // },
  // {
  //   name: 'high',
  //   value: Math.round(data.max_temp),
  //   unit: '°C'
  // },
  // {
  //   name: 'low',
  //   value: Math.round(data.min_temp),
  //   unit: '°C'
  // },
  // {
  //   name: 'sun rise',
  //   value: sun_rise,
  //   unit: 'am'
  // },
  // {
  //   name: 'sun set',
  //   value: sun_set,
  //   unit: 'pm'
  // }
]

export default getCurrentDayDetailsItems
