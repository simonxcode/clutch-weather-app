import React from 'react'
import PropTypes from 'prop-types'
import CurrentDay from '../CurrentDay'
import CurrentDayDetails from '../CurrentDayDetails'
import UpcomingDays from '../UpcomingDays'

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
    currentDayDetails: PropTypes.array, 
    upcomingDays: PropTypes.array 
  })
}

export default Forecast
