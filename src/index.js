import React from 'react';
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import Header from './components/Header'
import { Location } from './containers/Location'
import store from './store'

render (
  <Provider store={store}>
    <Header />
  <div>
    <Location />
  </div>
  </Provider>,

  document.getElementById('root')
)



