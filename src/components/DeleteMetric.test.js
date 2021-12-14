import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import DeleteMetric from './DeleteMetric';

describe('Testing the component <DeleteMetric />', () => {    
    let component = shallow(<DeleteMetric />);
	test('It should shows <DeleteMetric /> correctly', () => {
        expect(component).toMatchSnapshot();
        component.unmount();
	});
});