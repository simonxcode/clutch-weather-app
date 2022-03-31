import React from 'react'
import PropTypes from 'prop-types'

import CurrentDayDetailsItems from'../CurrentDayDetailsItems'

const CurrentDayDetails = ({ forecast }) => (
  <div className="bg-slate-50 p-2 m-2 md:ml-0">
    {forecast.map(item => (
      <CurrentDayDetailsItems key={item.name} {...item} />
    ))}
  </div>
)

CurrentDayDetails.propTypes = {
  forecast: PropTypes.array
}

export default CurrentDayDetails
