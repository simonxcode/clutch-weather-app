import { useState } from 'react';

const useForecast = () => {
  const [forecast, setForecast] = useState(null)
  
  console.log("hello I am a hook!")
  
  return {
    forecast,
  }
}

export default useForecast