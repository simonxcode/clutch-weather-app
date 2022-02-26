import React from 'react'
import PropTypes from 'prop-types'

import CurrentDayDetailsItems from'../CurrentDayDetailsItems'

const CurrentDayDetails = ({ forecast }) => (
  <div className="bg-blue-100 p-4">
    Current Day Details: 
    {forecast.map(item => (
      <CurrentDayDetailsItems key={item.name} {...item} />
    ))}
  </div>
)

CurrentDayDetails.propTypes = {
  forecast: PropTypes.array
}

export default CurrentDayDetails
