import React from 'react';

export default class CountdownForm extends React.Component {
	constructor(props) {
		super(props);
		this.onSubmit = this.onSubmit.bind(this);
	}

	onSubmit(e) {
		e.preventDefault();
		const strSeconds = this.refs.seconds.value;

		if (strSeconds.match(/^[0-9]*$/)) {
			this.refs.seconds.value = '';
			this.props.onSetCountdown(parseInt(strSeconds, 10));
		}
	}

	render() {
		return (
			<form ref="form" onSubmit={this.onSubmit} className="countdown-form">
				<input type="text" ref="seconds" placeholder="Enter time in seconds"/>
				<button className="btn btn-outline-primary btn-block">Start</button>
			</form>
		);
	}
}