import React from 'react'
import PropTypes from 'prop-types'
import CurrentDay from '../currentDay'

const Forecast = ({ forecast }) => (
  <div>
    <CurrentDay { ...forecast.currentDay }/>
  </div>
)

Forecast.propTypes = {
  forecast: PropTypes.shape({
    currentDay: PropTypes.object, 
  })
}

export default Forecast