import React from 'react'
import PropTypes from 'prop-types'

const iconURLBase = 'https://www.metaweather.com/static/'

const UpcomingDaysDetails = ({ iconURL, weekday, lowTemp, highTemp }) => (
  <li className="inline-block p-4 text-sky-900">
    <img src={`${iconURLBase}img/weather/${iconURL}.svg`} alt='weather icon' className="w-12 mb-2" />
    <p className="text-center font-semibold">{weekday}</p>
    <p className="text-center">{highTemp}° / {lowTemp}°</p>
  </li>
)

UpcomingDaysDetails.propTypes = {
  iconURL: PropTypes.string.isRequired,
  weekday: PropTypes.string.isRequired,
  highTemp: PropTypes.number.isRequired,
  lowTemp: PropTypes.number.isRequired
}

export default UpcomingDaysDetails