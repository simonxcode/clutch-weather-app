import moment from 'moment'

// const getWeekday = date => moment(date).format('dddd').substring(0, 3)

const dailyHighTemp = day => {
  return ((day.temp.max - 273.15) * 1.8 + 32.0).toFixed(0);
};

const dailyLowTemp = day => {
  return ((day.temp.min - 273.15) * 1.8 + 32.0).toFixed(0);
};

const getUpcomingDays = data => 
  data.slice(1, 6).map(day => ({
    // iconURL: day.weather_state_abbr,
    weekday: moment.unix(day.dt).format('ddd'),
    highTemp: dailyHighTemp(day),
    lowTemp: dailyLowTemp(day)
  }))

  export default getUpcomingDays