import React from 'react'
import App from './App'
import { graphReducer } from './App'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

let store = createStore(graphReducer)
exports.store = store
React.render(
  <Provider store={store}>
    {() => <App />}
  </Provider>,
  document.getElementById('root'))

  let whatWeWant = {
    color: {
      red: {},
      blue: {}
    }
  }
  let anAction =  { type: 'TESTMUTABLE', payload: whatWeWant}
  store.dispatch(anAction);
