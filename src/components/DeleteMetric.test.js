import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import DeleteMetric from './DeleteMetric';

describe('Probamos el componente <DeleteMetric />', () => {    
    let component = shallow(<DeleteMetric />);
	test('debería mostrar <DeleteMetric /> correctamente ', () => {
        expect(component).toMatchSnapshot();
        component.unmount();
	});
});