import React from 'react'
import PropTypes from 'prop-types'
import CurrentDay from '../CurrentDay'
import CurrentDayDetails from '../CurrentDayDetails'
import UpcomingDays from '../UpcomingDays'

const Forecast = ({ forecast }) => (
  <div className="flex justify-center items-center">
    <div className="xs:block md:flex grid grid-cols-3 w-144 h-108 bg-gray-100 p-4">
      <CurrentDay className="col-span-1"{...forecast.currentDay} />
      <div className="col-span-2" >
        <CurrentDayDetails forecast={forecast.currentDayDetails} />
        <UpcomingDays days={forecast.upcomingDays} />
      </div>
    </div>
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
