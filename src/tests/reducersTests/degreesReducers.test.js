import {
    DEGREES_CELSIUS,
    DEGREES_FAHRENHEIT,
  } from '../../constants/weatherAPIConstants';
import { degreesReducer } from '../../stateManagement/reducers/degreesReducers';

describe('degreesReducer', () => {

    test('return previous state when unknown action type', () => {
        const newState = degreesReducer(false, {type: 'unknown'});
        expect(newState).toBe(false);
    });

    test('return `true` for action type DEGREES_CELSIUS', () => {
        const newState = degreesReducer(false, {type: DEGREES_CELSIUS});
        expect(newState).toStrictEqual({ degrees: true });
    });

    test('return `false` for action type DEGREES_FAHRENHEIT', () => {
        const newState = degreesReducer(false, {type: DEGREES_FAHRENHEIT} );
        expect(newState).toStrictEqual({ degrees: false });
    });
});