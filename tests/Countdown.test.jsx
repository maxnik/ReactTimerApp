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
	});
});