import React from 'react'
import PropTypes from 'prop-types'

const Error = ({ message }) => (
  <div className="flex justify-center item-center font-medium text-sky-900">
    { message }
  </div>
)

Error.propTypes = {
  message: PropTypes.string
}

Error.defaultProps = {
  message: 'An error occurred'
}

export default Error

