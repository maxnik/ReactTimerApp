import React from 'react';

export default class Controls extends React.Component {
	render() {
		const {countdownStatus} = this.props;

		const renderStartStopButton = () => {
			if (countdownStatus === 'started') {
				return <button className="btn btn-outline-info">Pause</button>
			} else if (countdownStatus === 'paused') {
				return <button className="btn btn-outline-primary">Start</button>
			}
		};

		return (
			<div className="controls">
				{renderStartStopButton()}
				<button className="btn btn-outline-danger">Clear</button>
			</div>
		);
	}
}