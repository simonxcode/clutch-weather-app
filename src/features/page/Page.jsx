import React from 'react'
import Header from '../header'
import Form from '../form'
import Error from '../error'
import Forecast from '../forecast'
import useForecast  from '../../hooks/useForecast'

const Page = () => {
  const { isError, forecast, submitRequest } = useForecast()

  const onSubmit = value => {
    submitRequest({ value })  
  }

  return (
    <div>
      <Header />
      <Form submitRequest={ onSubmit } />
      {isError && <Error message={ isError } />}
      {forecast && <Forecast forecast={ forecast } />}
    </div>
  ) 
 
}

export default Page
