import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import Timeline from './Timeline';

describe('Testing the component <Timeline />', () => {    
    
    test('It should shows <Timeline /> correctly', () => {
        const metrics = [];
        let component = shallow(<Timeline metrics={metrics} />);
        expect(component).toMatchSnapshot();
        component.unmount();
	});

    test('It should shows <Timeline /> with 1 metric', () => {
        const newMetric = { id:1, name: 'Metric 1', value: 12 };
        const metrics = [newMetric];
        let component = shallow(<Timeline metrics={metrics} />);
        expect(component).toMatchSnapshot();
        component.unmount();
	});
});