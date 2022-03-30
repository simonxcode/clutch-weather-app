import moment from 'moment' 

const getFarenheit = temp => {
  return ((temp - 273.15) * 1.8 + 32.0).toFixed(0); 
};

const getCurrentDayForecast = (name, dt, data, response, temp, country) => ({
  weekday: moment.unix(dt).tz(data.timezone).format('ddd'),
  date: moment.unix(dt).tz(data.timezone).format('MMMM Do'),
  location: name, 
  country: country,
  temperature: getFarenheit(temp),
  weatherIcon: `https://www.openweathermap.org/img/w/${response.icon}.png`,
  weatherDescription: response.main
})

export default getCurrentDayForecast