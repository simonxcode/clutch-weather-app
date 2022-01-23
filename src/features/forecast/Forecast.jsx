import React from 'react'
import PropTypes from 'prop-types'
import CurrentDay from '../currentDay'
import CurrentDayDetails from '../currentDayDetails'
import UpcomingDays from '../upcomingDays'

const Forecast = ({ forecast }) => (
  <div>
    <CurrentDay { ...forecast.currentDay }/>
    <CurrentDayDetails forecast={forecast.currentDayDetails }/>
    <UpcomingDays days={forecast.upcomingDays}/>
  </div>
)

Forecast.propTypes = {
  forecast: PropTypes.shape({
    currentDay: PropTypes.object,
    currentDayDetails: PropTypes.object, 
    upcomingDays: PropTypes.array 
  })
}

export default Forecast