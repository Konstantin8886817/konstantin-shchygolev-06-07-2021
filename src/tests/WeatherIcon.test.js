import { shallow } from 'enzyme';

import { findByTestAttr } from './testUtils';
import WeatherIcon from '../components/WeatherIcon';

const setup = (props={}) => {
    return shallow(<WeatherIcon {...props} />)
}

test('renders without error', () => {
    const wrapper = setup();
    const component = findByTestAttr(wrapper, '');
    expect(component.length).toBe(0);
});
