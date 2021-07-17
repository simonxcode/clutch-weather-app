import React from 'react';
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { Location } from './features/location/Location'
import store from './app/store'

render (
  <Provider store={store}>
    <Location />
  </Provider>,

  document.getElementById('root')
)



