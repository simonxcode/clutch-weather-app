import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { changeLocation, selectLocation } from './locationSlice'
import PropTypes from 'prop-types'
import axios from 'axios'

const Form = () => {
  const location = useSelector(selectLocation) //need to place somewhere else 
  const dispatch = useDispatch()

  const [assignedLocation, setAssignedLocation] = useState('')
  const [apiData, setApiData] = useState({}); 

  const apiKey = process.env.REACT_APP_API_KEY;
  const apiCurrentUrl = `https://api.openweathermap.org/data/2.5/weather?q=${assignedLocation}&appid=${apiKey}`;

  const getCoordinates = () => {
    axios.get(apiCurrentUrl)
    .then(res => res.data)
    .then(data => {
      axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${data.coord.lat}&&lon=${data.coord.lon}&appid=${apiKey}`)
        .then((res) => {
          console.log(res)
          setApiData(res.data)
        }).catch((err) => {
          console.log(err)
        })
    })
  }

  const handleSubmit = e => {
    e.preventDefault()
    if (!assignedLocation || assignedLocation === '') return 
    getCoordinates()
  }

  const kelvinToFarenheit = k => {
    return ((k - 273.15) * 1.8 + 32.0).toFixed(0);
  };
    
  return (
    <div className="flex justify-center items-center p-4">
      <form onSubmit={handleSubmit}>
        <input 
          type='text' 
          name='location' 
          placeholder='city' 
          value={assignedLocation} 
          onChange={e => setAssignedLocation(e.target.value)} 
          className="border-2 mx-2 pl-1 pr-6 text-sky-900"
        />
        <button 
          onClick={() => dispatch(changeLocation(assignedLocation))} 
          className="font-bold border-solid border-2 border-stone-600 px-4 rounded-md text-sky-700"
        >
          search
        </button>
      </form>
      <div className="p-2">
        {apiData.current ? (
          <p>{kelvinToFarenheit(apiData.current.temp)}°F</p>
          ) : (
          ""
        )}
      </div>
    </div>
  );
}

Form.protoTypes = {
  submitRequest: PropTypes.func.isRequired
}

export default Form
