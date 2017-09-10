import React from 'react';
import Clock from 'Clock';
import Controls from 'Controls';

export default class Timer extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			count: 0,
			countupStatus: 'stopped'
		};
		this.handleStatusChange = this.handleStatusChange.bind(this);
	}

	componentDidUpdate(prevProps, prevState) {
		if (this.state.countupStatus !== prevState.countupStatus) {
			switch (this.state.countupStatus) {
				case 'started':
					this.startTimer();
					break;
				case 'stopped':
					this.setState({	count: 0 });
				case 'paused':
					clearInterval(this.timer);
					this.timer = undefined;
					break;
			}
		}
	}

	startTimer() {
		this.timer = setInterval(() => {
			const newCount = this.state.count + 1;
			this.setState({count: newCount});
		}, 1000);
	}

	componentWillUnmount() {
		clearInterval(this.timer);
		this.timer = undefined;
	}

	handleStatusChange(newStatus) {
		this.setState({countupStatus: newStatus});
	}

	render() {
		const {countupStatus, count} = this.state;

		return (
			<div>
				<h1 className="page-title">Timer App</h1>
				<Clock totalSeconds={count}/>
				<Controls countdownStatus={countupStatus} onStatusChange={this.handleStatusChange}/>
			</div>
		);
	}
}