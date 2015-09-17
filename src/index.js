import React from 'react'
import App, { exampleReducer } from './App'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

let store = createStore(exampleReducer)

React.render(
  <Provider store={store}>
    {() => <App />}
  </Provider>,
  document.getElementById('root'));

let anAction =  { type: "Something happened!", payload: "I said hello"}
store.dispatch(anAction);
