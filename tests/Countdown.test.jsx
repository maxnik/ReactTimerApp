import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';

import Countdown from 'Countdown';

describe('Countdown', () => {
	describe('handleSetCountdown', () => {
		it('should countdown', (done) => {
			const wrapper = shallow(<Countdown/>);
			const countdown = wrapper.instance();
			countdown.handleSetCountdown(10);

			expect(countdown.state.count).toBe(10);
			setTimeout(() => {
				expect(countdown.state.count).toBe(9);
				done();
			}, 1001);
		});

		it('should never set count less than zero', (done) => {
			const wrapper = shallow(<Countdown/>);
			const countdown = wrapper.instance();
			countdown.handleSetCountdown(1);

			setTimeout(() => {
				expect(countdown.state.count).toBe(0);
				done();
			}, 3001);
		});

		it('should pause countdown on paused status', (done) => {
			const wrapper = shallow(<Countdown/>);
			const countdown = wrapper.instance();
			countdown.handleSetCountdown(3);
			countdown.handleStatusChange('paused');

			setTimeout(() => {
				expect(countdown.state.count).toBe(3);
				expect(countdown.state.countdownStatus).toBe('paused');
				done();
			}, 1001);
		});

		it('should reset countdown on stopped status', (done) => {
			const wrapper = shallow(<Countdown/>);
			const countdown = wrapper.instance();
			countdown.handleSetCountdown(3);
			countdown.handleStatusChange('stopped');

			setTimeout(() => {
				expect(countdown.state.count).toBe(0);
				expect(countdown.state.countdownStatus).toBe('stopped');
				done();
			}, 1001);
		});
	});
});