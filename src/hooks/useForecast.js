import { useState } from 'react';

const useForecast = () => {
  const [forecast, setForecast] = useState(null)

  //call api 
  const submitRequest = assignedLocation => {
    console.log({assignedLocation})
  }

  return {
    forecast,
    submitRequest
  }
}

export default useForecast