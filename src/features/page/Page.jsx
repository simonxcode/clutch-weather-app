import React from 'react'
import Form from '../form'
import Forecast from '../forecast'
import useForecast  from '../../hooks/useForecast'


const Page = () => {
  const { forecast } = useForecast()

  const onSubmit = value => {
    console.log({ value })  
  }

  return (
    <div>
      <Form submitRequest={ onSubmit } />
      {forecast && <Forecast />}
    </div>
  )
 
}

export default Page