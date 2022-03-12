import React from 'react'
import PropTypes from 'prop-types'
import locationIcon from './assets/maps-and-flags.png'

const CurrentDay = ({ weekday, date, location, temperature, weatherIcon, weatherDescription }) => (
  <div className="m-2 bg-slate-50">
    <div className="pt-2 pr-2 pl-2">
      <img src={locationIcon} alt='location pin icon' className="inline-block w-5 mr-1 mb-2" />
      <span className="text-2xl pr-2 text-sky-900 font-semibold">{location}</span>
    </div>
    <div className="pr-2 pl-2 pb-2 text-sky-900">
      {/* <p className="inline-block pr-1">{weekday},</p> */}
      <p className="inline-block">{date}</p>
    </div>
    <div className="text-sky-900">
      {/* <img src={weatherIcon} alt='weather icon' className="inline-block w-20 p-2" /> */}
      {/* <span className="text-5xl align-middle p-2">{temperature} °C</span> */}
      <p className="block text-2xl p-2 font-light">{weatherDescription}</p>
    </div>
  </div>
)

CurrentDay.propTypes = {
  // weekday: PropTypes.string.isRequired,
  // date: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  // weatherIcon: PropTypes.string.isRequired,
  // temperature: PropTypes.number.isRequired,
  // weatherDescription: PropTypes.string.isRequired
}

export default CurrentDay