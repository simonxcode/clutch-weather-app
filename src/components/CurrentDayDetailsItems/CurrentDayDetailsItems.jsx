import React from 'react'
import PropTypes from 'prop-types'

const CurrentDayDetailsItems = ({ name, value, unit }) => (
  <div className="flex justify-between text-sky-900" data-cy="current-day-details-items">
    <p className="font-semibold">{name}:</p>
    <p className="pl-1 font-normal">{value}<span className="pl-0.5">{unit}</span></p>
  </div>
)

CurrentDayDetailsItems.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([
    PropTypes.string.isRequired,
    PropTypes.number.isRequired,
  ]),
  unit: PropTypes.string.isRequired
}

export default CurrentDayDetailsItems
