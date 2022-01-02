import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import PropTypes from 'prop-types'
import { changeLocation, selectLocation } from './locationSlice'

const Form = ({ submitRequest }) => {
  const location = useSelector(selectLocation) //need to place somewhere else 
  const dispatch = useDispatch()

  const [assignedLocation, setAssignedLocation] = useState('')

  const onSubmit = e => {
    e.preventDefault()
    if(!assignedLocation || assignedLocation === '') return 
     (submitRequest(assignedLocation))
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
        <button 
          onClick={() => dispatch(changeLocation(assignedLocation))} 
          className="font-bold border-solid border-2 border-stone-600"
        >
          search
        </button>
      </form>
    </div>
  );
}

Form.protoTypes = {
  submitRequest: PropTypes.func.isRequired
}

export default Form