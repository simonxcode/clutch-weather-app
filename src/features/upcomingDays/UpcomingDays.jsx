import React from 'react'
import PropTypes from 'prop-types'
import UpcomingDaysDetails from '../UpcomingDaysDetails'

const UpcomingDays = ({ days }) => (
    <div>
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