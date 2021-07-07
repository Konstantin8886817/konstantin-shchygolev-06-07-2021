import { Container, Nav, Navbar, Button } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';

import logo from '../images/logo.jpg';
import HeroloLogo from '../images/herolo_logo.jpg';

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
              <img
                alt='weather'
                src={HeroloLogo}
                width='65'
                className='d-inline-block align-top'
                style={{marginRight: '5px'}}
              />
              <img
                alt='weather'
                src={logo}
                width='55'
                style={{ borderRadius: '25px' }}
                className='d-inline-block align-top'
              />
              <span
                style={{
                  marginLeft: '5px',
                  display: 'inline-block',
                  marginTop: '10px',
                  fontWeight: '600',
                  fontSize: '25px',
                }}
              >
                Weather App
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
                <i className='fa fa-th-list fa-2x' style={{ color: '#66CCFF' }}></i>
              </Button>
            </Link>
          </Nav>
        </Container>
      </Navbar>
    </header>
  );
};

export default withRouter(Header);