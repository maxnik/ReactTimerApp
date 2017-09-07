import React from 'react';
// import ReactDOM from 'react-dom';
import expect from 'expect';
// import TestUtils from 'react-dom/test-utils';
import { shallow } from 'enzyme';

import Clock from 'Clock';

describe('Clock', () => {
	it('should exist', () => {
		expect(Clock).toBeTruthy();
	});

	describe('render', () => {
		it ('should render clock to output', () => {
			const wrapper = shallow(<Clock totalSeconds={62}/>);
			const actualText = wrapper.find('.clock-text').text();

			expect(actualText).toBe('01:02');
		});
	});

	describe('formatSeconds', () => {
		it('should format seconds', () => {
			//const clock = TestUtils.renderIntoDocument(<Clock/>);
			const clock = shallow(<Clock/>).instance();
			const seconds = 615;
			const expected = '10:15';
			const actual = clock.formatSeconds(seconds);

			expect(actual).toBe(expected);
		});

		it('should format seconds when min/sec are less than 10', () => {
			const clock = shallow(<Clock/>).instance();
			const seconds = 61;
			const expected = '01:01';
			const actual = clock.formatSeconds(seconds);

			expect(actual).toBe(expected);
		});
	});
});