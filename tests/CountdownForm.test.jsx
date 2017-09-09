import React from 'react';
import expect from 'expect';
import { mount } from 'enzyme';
import sinon from 'sinon';

import CountdownForm from 'CountdownForm';

describe('CountdownForm', () => {
	it('should call onSetCountdown if valid seconds entered', () => {
		const spy = sinon.spy();
		const wrapper = mount(<CountdownForm onSetCountdown={spy}/>);

		wrapper.instance().refs.seconds.value = '109';
		wrapper.find('form').simulate('submit');

		expect(spy.args[0]).toEqual([109]);
	});

	it('should not call onSetCountdown if invalid seconds entered', () => {
		const spy = sinon.spy();
		const wrapper = mount(<CountdownForm onSetCountdown={spy}/>);

		wrapper.instance().refs.seconds.value = '109b';
		wrapper.find('form').simulate('submit');

		expect(spy.callCount).toBe(0);
	});
});