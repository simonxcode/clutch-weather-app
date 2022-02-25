import React from 'react'
import PropTypes from 'prop-types'
import locationIcon from './assets/maps-and-flags.png'

const CurrentDay = ({ weekday, date, location, temperature, weatherIcon, weatherDescription }) => (
  <div className="bg-green-500">
    <div>
      <img src={locationIcon} alt='location pin icon' className="w-4 inline-block" />
      <span className="inline-block">{location}</span>
    </div>
    <div>
      <p className="inline-block">{weekday}, </p>
      <p className="inline-block">{date}</p>
    </div>
    <div>
      <img src={ weatherIcon } alt='weather icon' className="w-12" />
      <span className="inline-block">{temperature} °C</span>
      <p className="inline-block">{weatherDescription}</p>
    </div>
  </div>
)

CurrentDay.propTypes = {
  weekday: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  weatherIcon: PropTypes.string.isRequired,
  temperature: PropTypes.number.isRequired,
  weatherDescription: PropTypes.string.isRequired
}

export default CurrentDay