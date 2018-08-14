import React, { Component } from 'react';

export default class Bomb extends Component {

	constructor(props){
		super(props)
		this.state = {
			'secondsLeft': props.initialCount
		}
	}

	// renderBoom = () => {
	// }

	render(){
		console.log(this.state)
		const phrase = "seconds left before I go boom!"
		return (
			<div>
			{this.state.secondsLeft>0 ? this.state.secondsLeft+' '+phrase : "Boom!"}
			</div>
		)
	}
}
