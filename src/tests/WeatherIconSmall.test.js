import { shallow } from 'enzyme';

import { findByTestAttr } from './testUtils';
import WeatherIconSmall from '../components/WeatherIconSmall';

const setup = (props={}) => {
    return shallow(<WeatherIconSmall {...props}/>)
}

test('renders without error', () => {
    const wrapper = setup();
    const component = findByTestAttr(wrapper, '');
    expect(component.length).toBe(0);
});