import moment from 'moment'

const getHighTemp = day => {
  return ((day.temp.max - 273.15) * 1.8 + 32.0).toFixed(0);
};

const getLowTemp = day => {
  return ((day.temp.min - 273.15) * 1.8 + 32.0).toFixed(0);
};

const getWeatherIcon = day => {
  const icon = day.weather[0].icon
  return `https://www.openweathermap.org/img/w/${icon}.png`
}

const getUpcomingDays = (data, timezone) => 
  data.slice(1, 6).map(day => ({
    weatherIcon: getWeatherIcon(day),
    weekday: moment.unix(day.dt).tz(timezone).format('ddd'),
    highTemp: getHighTemp(day),
    lowTemp: getLowTemp(day)
  }))

  export default getUpcomingDays
  