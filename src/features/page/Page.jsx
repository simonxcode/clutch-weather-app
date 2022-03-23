import React from 'react'
import Header from '../Header'
import Form from '../Form'
import Loader from '../Loader'
import Error from '../Error'
import Forecast from '../Forecast'
import useForecast  from '../../hooks/useForecast'

const Page = () => {
  const { isError, forecast, submitRequest } = useForecast()

  const onSubmit = value => {
    submitRequest({ value })  
  }

  return (
    <div>
      <Header />
      <Form submitSearch={ onSubmit } />
      <Loader />
      {isError && <Error message={ isError } />}
      {forecast && <Forecast forecast={ forecast } />}
    
    </div>
  ) 
}

export default Page
