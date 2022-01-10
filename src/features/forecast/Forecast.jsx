import React from 'react'
import PropTypes from 'prop-types'
import CurrentDay from '../currentDay'
import CurrentDayDetails from '../currentDayDetails'
import UpcomingDays from '../upcomingDays'

const Forecast = ({ forecast }) => (
  <div>
    <CurrentDay { ...forecast.currentDay }/>
    <CurrentDayDetails { ...forecast.currentDayDetails }/>
    <UpcomingDays />
  </div>
)

Forecast.propTypes = {
  forecast: PropTypes.shape({
    currentDay: PropTypes.object,
    currentDayDetails: PropTypes.object 
  })
}

export default Forecast