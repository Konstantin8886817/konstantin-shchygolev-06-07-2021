import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from '@wojtekmaj/enzyme-adapter-react-17';

import { findByTestAttr } from '../../test/testUtils';
import WeatherIconSmall from './WeatherIconSmall';

Enzyme.configure({ adapter: new EnzymeAdapter() });

const setup = (props={}) => {
    return shallow(<WeatherIconSmall {...props}/>)
}

test('renders without error', () => {
    const wrapper = setup();
    const component = findByTestAttr(wrapper, '');
    expect(component.length).toBe(0);
});