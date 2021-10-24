import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import PropTypes from 'prop-types'
import { changeLocation, selectLocation } from './locationSlice'
import useForecast from '../../hooks/useForecast'

export function Location() {
  const location = useSelector(selectLocation)
  const dispatch = useDispatch()
  const [assignedLocation, setAssignedLocation] = useState("")
  const { submitRequest } = useForecast()

  const onSubmit = e => {
    e.preventDefault()
    if(!assignedLocation || assignedLocation === '') return 
    submitRequest({assignedLocation})
  }

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input 
          type='text' 
          name='location' 
          placeholder='city or zipcode' 
          value={assignedLocation} 
          onChange={e => setAssignedLocation(e.target.value)} 
        />
        <button onClick={() => dispatch(changeLocation(assignedLocation))}>search</button>
        <div>
          <span>{location}</span> 
        </div>
      </form>
    </div>
  );
}

Location.protoTypes = {
  submitRequest: PropTypes.func.isRequired
}