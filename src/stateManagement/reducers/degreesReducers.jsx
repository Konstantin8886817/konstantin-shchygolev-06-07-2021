import {
    DEGREES_CELSIUS,
    DEGREES_FAHRENHEIT,
  } from '../../constants/weatherAPIConstants';
  
  export const degreesReducer = (state = { degrees: true }, action) => {
    switch (action.type) {
      case DEGREES_CELSIUS:
        return { degrees: true }
      case DEGREES_FAHRENHEIT:
        return { degrees: false }
      default:
        return state
    };
  };