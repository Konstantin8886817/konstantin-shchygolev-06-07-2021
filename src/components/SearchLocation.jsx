import { Col, Row } from 'react-bootstrap';

import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch, useSelector } from 'react-redux';

import {
  listAutocompleteSearch,
  locationAutocompleteSearch,
} from '../stateManagement/actions/weatherApiActions';

const SearchLocation = () => {
  const dispatch = useDispatch();
  const autocompleteSearchListReducer = useSelector(
    ({ autocompleteSearchListReducer }) => autocompleteSearchListReducer
  );

  const themeReducer = useSelector(({ themeReducer }) => themeReducer);

  const handleSearchList = (e) => {
    if (!e.target.value.startsWith(' ') && e.target.value !== '') {
      dispatch(listAutocompleteSearch(e.target.value))
    };
  };
  const handleSearchLocation = (event, values) => {
    if (values) {
      dispatch(locationAutocompleteSearch(values.LocalizedName))
    };
  };

  const useStyles = makeStyles((theme) => ({
    root: {
      '& .MuiOutlinedInput-root': {
        '& fieldset': {
          borderColor: `${themeReducer.theme ? 'black' : 'white'}`,
        },
        '&:hover fieldset': {
          borderColor: `${themeReducer.theme ? 'black' : 'white'}`,
        },
        '&.Mui-focused fieldset': {
          borderColor: `${themeReducer.theme ? 'black' : 'white'}`,
        },
      },
      '& .MuiFormLabel-root': {
        color: `${themeReducer.theme ? 'black' : 'white'}`,
      },
    },
    inputRoot: {
      color: `${themeReducer.theme ? 'black' : 'white'}`,
    },
  }));

  const classes = useStyles();

  return (
    <Row className='py-3'>
      <Col md={6} className='mx-auto'>
        <Autocomplete
          id='weather-location'
          classes={classes}
          options={autocompleteSearchListReducer.locations}
          getOptionLabel={(option) =>
            `${option.LocalizedName} , ${option.Country.LocalizedName}`
          }
          onChange={handleSearchLocation}
          fullWidth
          renderInput={(params) => (
            <TextField
              {...params}
              label='Location'
              variant='outlined'
              onChange={handleSearchList}
            />
          )}
        />
      </Col>
    </Row>
  );
};

export default SearchLocation;