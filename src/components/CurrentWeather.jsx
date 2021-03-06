import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';

import Snackbar from '@material-ui/core/Snackbar';
import WeatherIcon from '../components/WeatherIcon';

import { conditionCurrent } from '../stateManagement/actions/weatherApiActions';

import {
  addFavorite,
  getFavorites,
  removeFavorite,
  checkIfFavoriteExist,
} from '../utils/managerFavorites';

const CurrentWeather = () => {
  const [open, setOpen] = useState(false);
  const [favIcon, setFavIcon] = useState(false);

  const dispatch = useDispatch();

  const themeReducer = useSelector(({ themeReducer }) => themeReducer);
  const degreesReducer = useSelector(({ degreesReducer }) => degreesReducer);

  const autocompleteSearchLocationReducer = useSelector(
    ({ autocompleteSearchLocationReducer }) => autocompleteSearchLocationReducer
  );
  const currentConditionReducer = useSelector(
    ({ currentConditionReducer }) => currentConditionReducer
  );

  const favorites = getFavorites();

  useEffect(() => {
    if (!autocompleteSearchLocationReducer.location.length) {
      dispatch(conditionCurrent('215854'))
      setFavIcon(checkIfFavoriteExist('215854'))
    } else {
      dispatch(
        conditionCurrent(autocompleteSearchLocationReducer.location[0].Key)
      );
      setFavIcon(
        checkIfFavoriteExist(autocompleteSearchLocationReducer.location[0].Key)
      );
    }
  }, [autocompleteSearchLocationReducer, dispatch]);

  const handleFavorite = () => {
    let location = {
      key: !autocompleteSearchLocationReducer.location.length
        ? '215854'
        : autocompleteSearchLocationReducer.location[0].Key,
      city: !autocompleteSearchLocationReducer.location.length
        ? 'Tel Aviv'
        : autocompleteSearchLocationReducer.location[0].LocalizedName,
      temp:
        currentConditionReducer.currentCondition[0].Temperature.Metric.Value,
      icon: currentConditionReducer.currentCondition[0].WeatherIcon,
      text: currentConditionReducer.currentCondition[0].WeatherText,
    };
    if (!favorites.length) {
      addFavorite(location)
      setOpen(true)
      setFavIcon(true)
    } else {
      if (checkIfFavoriteExist(location.key)) {
        removeFavorite(location.key)
        setOpen(true)
        setFavIcon(false)
      } else {
        addFavorite(location)
        setOpen(true)
        setFavIcon(true)
      };
    };
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return
    }
    setOpen(false)
  };

  return (
    <Row className='py-3'>
      <Col md={6} className='mx-auto'>
        <Card
          className='mx-auto text-center shadow'
          style={{ border: 'none', borderRadius: '20px' }}
          bg={themeReducer.theme ? 'light' : 'dark'}
          text={themeReducer.theme ? 'dark' : 'light'}
        >
          <Card.Header>
            <h1>
              {!autocompleteSearchLocationReducer.location.length
                ? 'Tel Aviv'
                : autocompleteSearchLocationReducer.location[0].LocalizedName}
            </h1>
          </Card.Header>
          <Card.Body>
            {!currentConditionReducer.currentCondition.length ? (
              ''
            ) : (
              <WeatherIcon
                number={currentConditionReducer.currentCondition[0].WeatherIcon}
              />
            )}
            <h1>
              {!currentConditionReducer.currentCondition.length
                ? ''
                : degreesReducer.degrees
                ? parseInt(
                    currentConditionReducer.currentCondition[0].Temperature
                      .Metric.Value
                  )
                : parseInt(
                    (currentConditionReducer.currentCondition[0].Temperature
                      .Metric.Value *
                      9) /
                      5 +
                      32
                  )}{' '}
              {degreesReducer.degrees ? '??C' : '??F'}
            </h1>
            <p>
              {!currentConditionReducer.currentCondition.length
                ? ''
                : currentConditionReducer.currentCondition[0].WeatherText}
            </p>

            <Button
              variant='outline-light'
              style={{
                fontSize: '16px',
                borderRadius: '100px',
                border: 'none',
              }}
              onClick={handleFavorite}
            >
              {favIcon ? (
                <i className='fa fa-ban fa-2x' style={{ color: 'salmon' }}></i>
              ) : (
                <i className='far fa-heart fa-2x' style={{ color: 'salmon' }}></i>
              )}
            </Button>
            <Snackbar
              open={open}
              autoHideDuration={3000}
              onClose={handleClose}
              message='Cool???? Favorites list has updated????'
            ></Snackbar>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};

export default CurrentWeather;