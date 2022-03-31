import React from 'react'
import Header from './components/Header'
import Form from './components/Form'
import Loader from './components/Loader'
import Error from './components/Error'
import Forecast from './components/Forecast'
import useForecast  from './hooks/useForecast'

const ClutchWeatherApp = () => {
  const { isLoading, isError, forecast, submitRequest } = useForecast()

  const onSubmit = value => {
    submitRequest({ value })  
  }

  return (
    <div>
      <Header />
      <Form submitSearch={onSubmit} />
      {isLoading && <Loader />}
      {isError && <Error message={ isError } />}
      {forecast && <Forecast forecast={ forecast } />}
    </div>
  ) 
}

export default ClutchWeatherApp

