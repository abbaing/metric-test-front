import React from 'react';
import { Modal } from 'react-bootstrap';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import DeleteMetric from './DeleteMetric';

describe('Testing the component <DeleteMetric />', () => {    
    let component = shallow(<DeleteMetric />);
	
    test('It should shows <DeleteMetric /> correctly', () => {
        expect(component).toMatchSnapshot();
        component.unmount();
	});

    test('It should shows <DeleteMetric /> with visible flag', () => {
        const isDeleteMetricVisible = true;
        component = shallow(<DeleteMetric isVisible={isDeleteMetricVisible} />);
        expect(component.find(Modal.Title).text()).toContain('Confirm');
        component.unmount();
	});
});