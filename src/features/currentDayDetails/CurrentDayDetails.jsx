import React from 'react'
import PropTypes from 'prop-types'

import CurrentDayDetailsItems from'../CurrentDayDetailsItems'

const CurrentDayDetails = ({ forecast }) => (
  <div className="bg-slate-50 m-2">
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
