import React from 'react'
import PropTypes from 'prop-types'

const CurrentDayDetailsItems = ({ name, value, unit }) => (
  <div className="flex justify-between text-sky-900">
    <p className="font-semibold">{name}:</p>
    <span className="pl-1 font-normal">{value}{unit}</span>
    </div>
  )

CurrentDayDetailsItems.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  unit: PropTypes.string.isRequired
}

export default CurrentDayDetailsItems
