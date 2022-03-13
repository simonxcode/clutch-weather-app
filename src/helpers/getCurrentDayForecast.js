import moment from 'moment' 

const kelvinToFarenheit = temp => {
  return ((temp - 273.15) * 1.8 + 32.0).toFixed(0);
};

const getCurrentDayForecast = (name, dt, response, temp) => ({
  weekday: moment.unix(dt).format('ddd'),
  date: moment.unix(dt).format('MMMM Do'),
  location: name, 
  temperature: kelvinToFarenheit(temp),
  // weatherIcon: `https://www.metaweather.com/static/img/weather/${data.weather_state_abbr}.svg`,
  weatherDescription: response.main
})

export default getCurrentDayForecast