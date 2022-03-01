import React from 'react'
import PropTypes from 'prop-types'
import UpcomingDaysDetails from '../UpcomingDaysDetails'

const UpcomingDays = ({ days }) => (
  <div className="p-4">
      Upcoming Days Forecast
      <ul className="flex">
        {days.map(day => (
          <UpcomingDaysDetails {...day} key={day.weekday} />
        ))}
      </ul>
    </div>
  )

UpcomingDays.propTypes = {
  days: PropTypes.array.isRequired
}

export default UpcomingDays