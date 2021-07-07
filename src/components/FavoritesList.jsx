import React from 'react';
import { Col, Row } from 'react-bootstrap';
import FavoritesCard from './FavoritesCard';

import { getFavorites } from '../utils/managerFavorites';

const FavoritesList = () => {
  const favorites = getFavorites();
  return (
    <Row>
      {!favorites.length
        ? ''
        : favorites.map((x) => (
            <Col md={3} key={x.key}>
              <FavoritesCard
                city={x.city}
                icon={x.icon}
                temp={x.temp}
                text={x.text}
              />
            </Col>
          ))}
    </Row>
  );
};

export default FavoritesList;