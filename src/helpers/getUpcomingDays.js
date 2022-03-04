import moment from 'moment'

const getWeekday = date => moment(date).format('dddd').substring(0, 3)

const getUpcomingDays = data => 
  data.slice(1).map(day => ({
    iconURL: day.weather_state_abbr,
    weekday: getWeekday(day.applicable_date),
    highTemp: Math.round(day.max_temp),
    lowTemp: Math.round(day.min_temp)
  }))

  export default getUpcomingDays