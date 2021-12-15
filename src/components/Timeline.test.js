import React from 'react';
import { Modal } from 'react-bootstrap';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import Timeline from './Timeline';

describe('Testing the component <Timeline />', () => {    
    const metrics = [];
    let component = shallow(<Timeline metrics={metrics} />);
	
    test('It should shows <DeleteMetric /> correctly', () => {
        expect(component).toMatchSnapshot();
        component.unmount();
	});
});