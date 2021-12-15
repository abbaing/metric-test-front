import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import FloatingButton from './FloatingButton';

describe('Testing the component <FloatingButton />', () => {    
    
    test('It should shows <FloatingButton /> correctly', () => {
        const metrics = [];
        let component = shallow(<FloatingButton metrics={metrics} />);
        expect(component).toMatchSnapshot();
        component.unmount();
	});
});