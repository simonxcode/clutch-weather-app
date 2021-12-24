import React from 'react'
import PropTypes from 'prop-types'
import locationIcon from './assets/maps-and-flags.png'

const CurrentDay = ({ weekday, date, location, temperature, weatherIcon, weatherDescription }) => (
  <div>
    <div>
      <h2>{ weekday }</h2>
      <p>{ date }</p>
      <p>
        <img src={ locationIcon } alt='location pin icon' />
        <span>{ location }</span>
      </p>
    </div>
    <div>
      <img src= { weatherIcon } alt='' />
      <h2>
        <span>{ temperature }</span>
      </h2>
      <h5>{ weatherDescription }</h5>
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