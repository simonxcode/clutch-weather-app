import React from 'react'
import PropTypes from 'prop-types'

const UpcomingDaysDetails = ({ weatherIcon, weekday, lowTemp, highTemp }) => (
  <li className="inline-block p-4 text-sky-900">
    <img src={weatherIcon} alt='weather icon' className="w-16" />
    <p className="text-center font-semibold">{weekday}</p>
    <p className="text-center">{highTemp} / {lowTemp}°F</p>
  </li>
)

UpcomingDaysDetails.propTypes = {
  weatherIcon: PropTypes.string.isRequired,
  weekday: PropTypes.string.isRequired,
  highTemp: PropTypes.string.isRequired,
  lowTemp: PropTypes.string.isRequired
}

export default UpcomingDaysDetails