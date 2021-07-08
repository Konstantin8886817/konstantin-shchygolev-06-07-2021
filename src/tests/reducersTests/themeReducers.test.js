import {
    LIGHT_THEME, 
    DARK_THEME
  } from '../../constants/weatherAPIConstants';
import { themeReducer } from '../../stateManagement/reducers/themeReducers';

describe('themeReducers', () => {

    test('return previous state when unknown action type', () => {
        const newState = themeReducer(false, {type: 'unknown'});
        expect(newState).toBe(false);
    });

    test('return `true` for action type DEGREES_CELSIUS', () => {
        const newState = themeReducer(false, {type: LIGHT_THEME});
        expect(newState).toStrictEqual({ theme: true });
    });

    test('return `false` for action type DEGREES_FAHRENHEIT', () => {
        const newState = themeReducer(false, {type: DARK_THEME} );
        expect(newState).toStrictEqual({ theme: false });
    });
});