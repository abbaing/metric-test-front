import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import NewMetric from './NewMetric';

describe('Testing the component <NewMetric />', () => {    
    
    test('It should shows <NewMetric /> correctly', () => {
        const metrics = [];
        let component = shallow(<NewMetric metrics={metrics} />);
        expect(component).toMatchSnapshot();
        component.unmount();
	});
});