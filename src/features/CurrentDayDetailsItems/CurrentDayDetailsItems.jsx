import React from 'react'
import PropTypes from 'prop-types'

const CurrentDayDetailsItems = ({ name, value, unit }) => (
    <div>
      <p>{name}: {value}{unit}</p>
    </div>
  )

CurrentDayDetailsItems.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  unit: PropTypes.string.isRequired
}

export default CurrentDayDetailsItems
