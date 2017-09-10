import React from 'react';

export default class Controls extends React.Component {
	constructor(props) {
		super(props);

		this.onStatusChange = this.onStatusChange.bind(this);
	}

	onStatusChange(newStatus) {
		return () => {
			this.props.onStatusChange(newStatus);
		}
	}

	render() {
		const {countdownStatus} = this.props;

		const renderStartStopButton = () => {
			if (countdownStatus === 'started') {
				return <button className="btn btn-outline-info" onClick={this.onStatusChange('paused')}>Pause</button>
			} else if (countdownStatus === 'paused') {
				return <button className="btn btn-outline-primary" onClick={this.onStatusChange('started')}>Start</button>
			}
		};

		return (
			<div className="controls">
				{renderStartStopButton()}
				<button className="btn btn-outline-danger" onClick={this.onStatusChange('stopped')}>Clear</button>
			</div>
		);
	}
}