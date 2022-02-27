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
    <div className="flex justify-center items-center p-4">
      <form onSubmit={onSubmit}>
        <input 
          type='text' 
          name='location' 
          placeholder='city' 
          value={assignedLocation} 
          onChange={e => setAssignedLocation(e.target.value)} 
          className="border-2 mx-2 pl-1 pr-6"
        />
        <button 
          onClick={() => dispatch(changeLocation(assignedLocation))} 
          className="font-bold border-solid border-2 border-stone-600 px-4 rounded-md"
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
