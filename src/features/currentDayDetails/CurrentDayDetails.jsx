import React from 'react'
import PropTypes from 'prop-types'

import CurrentDayDetailsItems from'../CurrentDayDetailsItems'

const CurrentDayDetails = ({ forecast }) => (
  <div className="bg-slate-50 mt-2 mr-2 mb-2 p-2">
    {forecast.map(item => (
      <CurrentDayDetailsItems key={item.name} {...item} />
    ))}
  </div>
)

CurrentDayDetails.propTypes = {
  forecast: PropTypes.array
}

export default CurrentDayDetails
