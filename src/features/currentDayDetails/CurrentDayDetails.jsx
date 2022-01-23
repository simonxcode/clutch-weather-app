import React from 'react'
import PropTypes from 'prop-types'

const CurrentDayDetails = ({ humidity, windSpeed, windDirection, highTemp, lowTemp, sunrise, sunset }) => (
    <div>
      Current Day Details
      <p>Humidity: {humidity}</p>
      <p>Wind: {windSpeed}</p>
      <p>Wind direction: {windDirection}</p>
      <p>High Temp: {highTemp}</p>
      <p>Low Temp: {lowTemp}</p>
      <p>Sunrise: {sunrise}</p>
      <p>Sunset: {sunset}</p>
    </div>
  )


CurrentDayDetails.propTypes = {
  humidity: PropTypes.number.isRequired,
  windSpeed: PropTypes.number.isRequired,
  windDirection: PropTypes.string.isRequired,
  highTemp: PropTypes.number.isRequired,
  lowTemp: PropTypes.number.isRequired,
  // sunrise: PropTypes.string.isRequired,
  // sunset: PropTypes.string.isRequired,
}

export default CurrentDayDetails


