import React from 'react'
import PropTypes from 'prop-types'
import UpcomingDaysDetails from '../UpcomingDaysDetails'

const UpcomingDays = ({ days }) => (
  <div className="mt-2 mr-2 mb-2 bg-slate-50">
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