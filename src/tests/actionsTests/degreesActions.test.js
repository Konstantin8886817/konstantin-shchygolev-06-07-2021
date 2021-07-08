import { ToggleFahrenheit, ToggleCelsius } from '../../stateManagement/actions/degreesActions';

describe('degreesActions', () => {

    test('returns an action with type `DEGREES_FAHRENHEIT`', () => {
        const action = ToggleFahrenheit();
        expect(action).toStrictEqual({type: 'DEGREES_FAHRENHEIT'});
    });

    test('returns an action with type `DEGREES_CELSIUS`', () => {
        const action = ToggleCelsius();
        expect(action).toStrictEqual({type: 'DEGREES_CELSIUS'});
    });
});