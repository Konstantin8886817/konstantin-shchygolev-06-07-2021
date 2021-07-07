import React from 'react';
import { Container } from 'react-bootstrap';
import FavoritesList from '../components/FavoritesList';

const FavoritesLayout = () => {
  return (
    <Container className='py-3 text-center'>
      <h1>
        Favorites <i className='fas fa-heart' style={{ color: 'salmon' }}></i>
      </h1>
      <FavoritesList />
    </Container>
  );
};

export default FavoritesLayout;