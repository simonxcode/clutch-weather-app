import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { changeLocation, selectLocation } from './locationSlice'

export function Location() {
  const location = useSelector(selectLocation)
  const dispatch = useDispatch()
  const [assignedLocation, setAssignedLocation] = useState("")

  return (
    <div>
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
    </div>
  );
}