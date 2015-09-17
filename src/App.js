import React, { Component, findDOMNode } from 'react'
import { store } from './index'
import { connect } from 'react-redux'

@connect((state) => ({
  graphState: state
}))
export default class App extends Component {
  render() {
    const { graphState } = this.props
    let graphStateIsWhatWeWant = graphState === whatWeWant

    return (
      <div>
        <textarea readOnly style={ {
        width: '50%', height: '50%',
        background: (graphStateIsWhatWeWant ? 'rgba(30, 255, 30, 0.5)'
        : 'orange')
        } } value={JSON.stringify(graphState, null, 4)} />
        <textarea readOnly style={ {
        width: '50%', height: '50%',
        background: 'rgba(30, 255, 30, 0.5)'
        } } value={JSON.stringify(whatWeWant, null, 4)} />
        <button style={{margin: '0 auto', display: 'block'}}>Send action</button>

      </div>
    )
  }
}


let initialGraphState = {
  color: {
    red: {}
  }
}

let whatWeWant = {
  color: {
    red: {},
    blue: {}
  }
}

export function graphReducer (state = initialGraphState, action = {}) {
  switch (action.type) {
    case 'TESTMUTABLE':
      console.log('get TESTMUTABLE');
      return state = action.payload
    break;
    default:
      return state
  }
}
