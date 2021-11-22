import React from 'react'
import Form from '../form'
import Forecast from '../forecast'
import useForecast  from '../../hooks/useForecast'


const Page = () => {
  const { forecast, submitRequest } = useForecast()

  const onSubmit = value => {
    submitRequest({ value })  
  }

  return (
    <div>
      <Form submitRequest={ onSubmit } />
      {forecast && <Forecast />}
    </div>
  )
 
}

export default Page