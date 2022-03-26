import React, { useState } from 'react'
import { /*useSelector*/ useDispatch } from 'react-redux'
import { changeLocation /*selectLocation*/ } from './locationSlice'
import PropTypes from 'prop-types'

const Form = ({ submitSearch }) => {
  // const location = useSelector(selectLocation) //need to place somewhere else 
  const dispatch = useDispatch()
  const [assignedLocation, setAssignedLocation] = useState('')

  const handleSubmit = e => {
    e.preventDefault()
    if (!assignedLocation || assignedLocation === '') return 
    submitSearch(assignedLocation)
    // getCoordinates()
  }
      
  return (
    <div className="flex justify-center items-center p-4">
      <form onSubmit={handleSubmit}>
        <input 
          type='text' 
          name='location' 
          placeholder='city' 
          value={assignedLocation} 
          onChange={e => setAssignedLocation(e.target.value)} 
          className="text-sky-900 border-b-4 border-slate-300 mx-2 pl-1 pr-6"
        />
        <button 
          onClick={() => dispatch(changeLocation(assignedLocation))} 
          className="px-4 text-sky-900 rounded-md bg-sky-200 border-solid border-b-4 border-slate-300"
        >
          search
        </button>
      </form>
    </div>
  );
}

Form.protoTypes = {
  submitSearch: PropTypes.func.isRequired
}

export default Form
