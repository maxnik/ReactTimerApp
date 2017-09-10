import React from 'react';
import expect from 'expect';
import {shallow} from 'enzyme';

import Controls from 'Controls';

describe('Controls', () => {
	describe('render', () => {
		it('should render pause when started', () => {
			const wrapper = shallow(<Controls countdownStatus="started"/>);

			expect(wrapper.find('button[children="Pause"]').length).toBe(1);
		});

		it('should render start when paused', () => {
			const wrapper = shallow(<Controls countdownStatus="paused"/>);

			expect(wrapper.find('button[children="Start"]').length).toBe(1);
		});
	});
});