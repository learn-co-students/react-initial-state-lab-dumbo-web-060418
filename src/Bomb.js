// your Bomb code here!
import React, { Component } from 'react'
import ReactDOM from 'react-dom'

export default class Bomb extends Component {
  constructor(props) {
    super(props)
    this.state = {
      secondsLeft: this.props.initialCount
    }
  }

  render() {

    return (
      <div>
        {this.state.secondsLeft === 0 ? 'Boom!' : `${this.state.secondsLeft} seconds left before I go boom!`}
      </div>
    )
    }
}
