import React from 'react';
import { Container, Nav, Navbar, Button } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';

import logo from '../images/logo.jpg';

const Header = () => {
  const themeReducer = useSelector(({ themeReducer }) => themeReducer);

  return (
    <header>
      <Navbar
        bg={themeReducer.theme ? 'light' : 'dark'}
        variant={themeReducer.theme ? 'light' : 'dark'}
        expand='lg'
        className='border-0'
      >
        <Container>
          <Link to='/'>
            <Navbar.Brand>
              {' '}
              <img
                alt='weather'
                src={logo}
                width='45'
                style={{ borderRadius: '5px' }}
                className='d-inline-block align-top'
              />{' '}
              <span
                style={{
                  marginLeft: '5px',
                  display: 'inline-block',
                  marginTop: '4px',
                }}
              >
                Weather
              </span>
            </Navbar.Brand>
          </Link>
          <Nav className='ml-auto'>
            <Link to='/favorite'>
              <Button
                variant='outline-light'
                style={{
                  fontSize: '16px',
                  borderRadius: '100px',
                  border: 'none',
                }}
              >
                <i className='fas fa-heart' style={{ color: 'salmon' }}></i>
              </Button>
            </Link>
          </Nav>
        </Container>
      </Navbar>
    </header>
  );
};

export default withRouter(Header);