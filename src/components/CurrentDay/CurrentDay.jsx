import React from 'react'
import PropTypes from 'prop-types'
import locationIcon from '../../assets/location-pin.png'

const CurrentDay = ({ weekday, date, location, country, temperature, weatherIcon, weatherDescription }) => (
  <div className="m-2 bg-slate-50">
    <div className="xs:flex justify-center md:block mb-2 pt-2 pr-2 pl-2">
      <img src={locationIcon} alt='location pin icon' className="inline-block w-5 xs:mt-1.5 md:mt-0 mr-1 mb-2" />
      <span className="text-2xl pr-1 text-sky-900 font-semibold">{location},</span>
      <span className="text-2xl text-sky-900 font-semibold">{country}</span>
    </div>
    <div className="xs:flex justify-center md:block pr-2 pl-2 pb-2 text-sky-900">
      <p className="inline-block pr-1">{weekday},</p>
      <p className="inline-block">{date}</p>
    </div>
    <div className="xs:flex justify-center md:block text-sky-900">
      <img src={weatherIcon} alt='weather icon' className="inline-block w-24 xs:-m-2 md:pt-2 pr-2 pl-2" /> 
      <span className="text-5xl align-middle pt-2 pr-2 pl-2">{temperature} °F</span>
    </div>
    <div className="xs:flex justify-center md:block">
      <p className="text-2xl pr-2 pb-2 pl-2 text-sky-900 font-light">{weatherDescription}</p>
    </div>
  </div>
)

CurrentDay.propTypes = {
  weekday: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
  weatherIcon: PropTypes.string.isRequired,
  temperature: PropTypes.string.isRequired,
  weatherDescription: PropTypes.string.isRequired
}

export default CurrentDay
