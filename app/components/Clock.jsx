import React from 'react';

class Clock extends React.Component {
	formatSeconds(totalSeconds) {
		let seconds = totalSeconds % 60;
		let minutes = Math.floor(totalSeconds / 60);

		if (minutes < 10) {
			minutes = `0${minutes}`;
		}
		if (seconds < 10) {
			seconds = `0${seconds}`;
		}

		return `${minutes}:${seconds}`;
	}

	render() {
		const {totalSeconds} = this.props;

		return (
			<div className="clock">
				<span className="clock-text">
					{this.formatSeconds(totalSeconds)}
				</span>
			</div>
		);
	}
}

Clock.defaultProps = {
	totalSeconds: 0
};

module.exports = Clock;