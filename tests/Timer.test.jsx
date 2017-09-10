import React from 'react';
import expect from 'expect';
import {shallow} from 'enzyme';

import Timer from 'Timer';

describe('Timer', () => {
	it('should start timer on started status', (done) => {
		const wrapper = shallow(<Timer/>);
		const timer = wrapper.instance();
		timer.handleStatusChange('started')

		expect(timer.state.count).toBe(0);
		setTimeout(() => {
			expect(timer.state.count).toBe(2);
			done();
		}, 2001);
	});

	it('should pause timer on paused status', (done) => {
		const wrapper = shallow(<Timer/>);
		const timer = wrapper.instance();
		timer.setState({count: 10});
		timer.handleStatusChange('started');
		timer.handleStatusChange('paused');
		
		setTimeout(() => {
			expect(timer.state.count).toBe(10);
			done();
		}, 2001);
	});

	it('should clear count on stopped status', (done) => {
		const wrapper = shallow(<Timer/>);
		const timer = wrapper.instance();
		timer.setState({count: 10});
		timer.handleStatusChange('started');
		timer.handleStatusChange('stopped');

		setTimeout(() => {
			expect(timer.state.count).toBe(0);
			done();
		}, 2001);
	});
});