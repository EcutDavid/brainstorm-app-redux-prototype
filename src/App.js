import React, { Component, findDOMNode } from 'react'
import { store } from './index'
import { connect } from 'react-redux'

//@ this language syntax called Decorators
//Provide function of smart component.
//https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0
@connect((state) => ({
  state1: state,
  stateCopy: state
}))

export default class App extends Component {
  render() {
    //it converts to var state1 = this.props.state1;
    const { state1 } = this.props
    return (
      <div>
        <h2>{state1}</h2>
        <h2>Hello world!</h2>
        <h2>{this.props.stateCopy}</h2>
      </div>
    )
  }
}

export function exampleReducer (initialState = {}, action = {}) {
  switch (action.type) {
    case 'Something happened!':
      console.log(action.payload)
      return initialState.something = action.payload
    default:
      return initialState
  }
}
