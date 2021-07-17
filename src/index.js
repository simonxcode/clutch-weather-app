import React from 'react';
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import Header from './components/Header'
import CurrentLocation from './containers/CurrentLocationComponent'
import store from './store'

render (
  <Provider store={store}>
    <Header />
  <div>
    <CurrentLocation />
  </div>
  </Provider>,

  document.getElementById('root')
)



