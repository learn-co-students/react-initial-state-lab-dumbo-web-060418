// your Bomb code here!
import React, { Component } from 'react';
import ImageSlider from './ImageSlider.js'

class Bomb extends Component {

  constructor(props) {
    super(props)
    this.state = {
      secondsLeft: this.props.initialCount
    }
  }

  componentDidMount() {
    setInterval(() => {
      if (this.state.secondsLeft >= 1) {
        this.setState({
          secondsLeft: this.state.secondsLeft - 1
        })
      } else {
        this.state.secondsLeft = 0
      }
    }, 1000)
  }

  render() {
    return(
      <div className="bomb">
        {this.state.secondsLeft === 0 ? "Boom!" : `${this.state.secondsLeft} seconds left before I go boom!`}
      </div>
    )
  }

}

export default Bomb
