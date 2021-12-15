import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import Container from './Container';

describe('Testing the component <Container />', () => {    
    
    test('It should shows <Container /> correctly', () => {
        const metrics = [];
        let component = shallow(<Container metrics={metrics} />);
        expect(component).toMatchSnapshot();
        component.unmount();
	});
});