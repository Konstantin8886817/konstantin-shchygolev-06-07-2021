import { shallow } from 'enzyme';
import Header from '../components/Header';
import FavoritesList from '../components/FavoritesList';
import WeatherIcon from '../components/WeatherIcon';
import WeatherIconSmall from '../components/WeatherIconSmall';

describe ('testing that components exist', () => {
    
    test('header exist', () => {
        const wrapper = shallow( <Header/> );
        expect(wrapper.exists()).toBe(true);
    });

    test('footer exist', () => {
        const wrapper = shallow( <FavoritesList/> );
        expect(wrapper.exists()).toBe(true);
    });

    test('weatherIcon exist', () => {
        const wrapper = shallow( <WeatherIcon/> );
        expect(wrapper.exists()).toBe(true);
    });

    test('weatherIconSmall exist', () => {
        const wrapper = shallow( <WeatherIconSmall/> );
        expect(wrapper.exists()).toBe(true);
    });


});
