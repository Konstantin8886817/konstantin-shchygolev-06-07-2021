import React from 'react';
import { Container } from 'react-bootstrap';
import CurrentWeather from '../components/CurrentWeather';
import FiveDaysList from '../components/FiveDaysList';
import SearchLocation from '../components/SearchLocation';

const HomeLayout = () => {
  return (
    <Container className='py-3'>
      <SearchLocation />
      <CurrentWeather />
      <FiveDaysList />
    </Container>
  );
};

export default HomeLayout;