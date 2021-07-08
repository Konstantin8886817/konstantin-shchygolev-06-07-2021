import { shallow } from 'enzyme';

import { findByTestAttr } from './testUtils';
import CurrentWeather from '../components/CurrentWeather';

const setup = () => {
    return shallow(<CurrentWeather />)
}

test('renders without error', () => {
    const wrapper = setup();
    const component = findByTestAttr(wrapper, 'py-3');
    expect(component.length).toBe(1);
});
