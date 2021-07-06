import axios from 'axios'
import {
  AUTOCOMPLETE_SEARCH_LIST_FAIL,
  AUTOCOMPLETE_SEARCH_LIST_SUCCESS,
  AUTOCOMPLETE_SEARCH_LOCATION_SUCCESS,
  AUTOCOMPLETE_SEARCH_LOCATION_FAIL,
  CURRENT_CONDITION_SUCCESS,
  CURRENT_CONDITION_FAIL,
  FIVE_DAYS_CONDITION_SUCCESS,
  FIVE_DAYS_CONDITION_FAIL,
} from '../../constants/weatherAPIConstants';

const api = [
  'WJ9kOJdwSpEsVz3E6l5ULWiPpX8JoJL0',
  'rYBVyyZFhtZkPwiQI6eQWaIYipiGFVma',
  '8MIzGGl33vxvfOwRUAaO7amkjot7RP42',
  'yPu77kXYByuhCrrRLTdrrNqPQmJKi1WO',
  'FKwlSoqGXQpxkE9rsEAW9hUU15KQxmAG',
  'O9AFzM6d6HAnPRzuuq1XvGAsCdGNMMgh',
  'PyDoAhvagvVRatEbkpAC6NS64Qqw7KIP',
  'b1rtH1c7YGAGM5oe3z8xmeRuenABGxtA',
  'RYPnuZM3IIH78UxZPGZwy9OOlyklRl98',
  'IH6XdJmS862iwvSXT8xXek0z9pyNue08',
]

var accuWeatherApiKey = api[Math.floor(Math.random() * api.length)]

export const listAutocompleteSearch = (searchWord) => async (dispatch) => {
  try {
    const { data } = await axios.get(
      `https://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=${accuWeatherApiKey}&q=${searchWord}`
    )

    dispatch({
      type: AUTOCOMPLETE_SEARCH_LIST_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: AUTOCOMPLETE_SEARCH_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}

export const locationAutocompleteSearch = (searchWord) => async (dispatch) => {
  try {
    const { data } = await axios.get(
      `https://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=${accuWeatherApiKey}&q=${searchWord}`
    )

    dispatch({
      type: AUTOCOMPLETE_SEARCH_LOCATION_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: AUTOCOMPLETE_SEARCH_LOCATION_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}

export const conditionCurrent = (key) => async (dispatch) => {
  try {
    const { data } = await axios.get(
      `https://dataservice.accuweather.com/currentconditions/v1/${key}?apikey=${accuWeatherApiKey}`
    )

    dispatch({
      type: CURRENT_CONDITION_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: CURRENT_CONDITION_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}

export const conditionFiveDays = (key) => async (dispatch) => {
  try {
    const { data } = await axios.get(
      `https://dataservice.accuweather.com/forecasts/v1/daily/5day/${key}?apikey=${accuWeatherApiKey}&metric=true`
    )

    dispatch({
      type: FIVE_DAYS_CONDITION_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: FIVE_DAYS_CONDITION_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}