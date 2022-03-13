import moment from 'moment' 

const kelvinToFarenheit = temp => {
  return ((temp - 273.15) * 1.8 + 32.0).toFixed(0);
};

const getCurrentDayForecast = (name, dt, response, temp) => ({
  weekday: moment.unix(dt).format('ddd'),
  date: moment.unix(dt).format('MMMM Do'),
  location: name, 
  temperature: kelvinToFarenheit(temp),
  weatherIcon: `https://www.openweathermap.org/img/w/${response.icon}.png`,
  weatherDescription: response.main
})

export default getCurrentDayForecast