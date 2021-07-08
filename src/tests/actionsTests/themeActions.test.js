import { ToggleDarkTheme, ToggleLightTheme } from '../../stateManagement/actions/themeActions';

describe('themeActions', () => {

    test('returns an action with type `DARK_THEME`', () => {
        const action = ToggleDarkTheme();
        expect(action).toStrictEqual({type: 'DARK_THEME'});
    });

    test('returns an action with type `LIGHT_THEME`', () => {
        const action = ToggleLightTheme();
        expect(action).toStrictEqual({type: 'LIGHT_THEME'});
    });
});

