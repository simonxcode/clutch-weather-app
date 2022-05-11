import React, { useState } from 'react'
import PropTypes from 'prop-types'

const Form = ({ submitSearch }) => {
  const [assignedLocation, setAssignedLocation] = useState('')

  const handleSubmit = e => {
    e.preventDefault()
    if (!assignedLocation || assignedLocation === '') return 
    submitSearch(assignedLocation)
    setAssignedLocation('')
  }
      
  return (
    <div className="flex justify-center items-center p-4" id="form-container">
      <form onSubmit={handleSubmit} className="xs:flex flex-col item-center justify-center sm:inline">
        <input 
          autoFocus={true}  
          type='text'     
          name='location' 
          placeholder='city' 
          value={assignedLocation} 
          onChange={e => setAssignedLocation(e.target.value)} 
          className="text-sky-900 border-b-4 border-slate-300 mx-2 pl-1 pr-6"
          id="form-input"
        />
        <button 
          onClick={handleSubmit} 
          className="text-sky-900 rounded-md bg-sky-200 border-solid border-b-4 border-slate-300 px-4 xs:m-2"
          id="form-button"
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
