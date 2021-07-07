import { Container, Navbar } from 'react-bootstrap';
import Switch from '@material-ui/core/Switch';

import { useDispatch, useSelector } from 'react-redux';

import { ToggleTheme } from '../stateManagement/actions/themeActions';
import { ToggleDegrees } from '../stateManagement/actions/degreesActions';

const Footer = () => {
  const dispatch = useDispatch();
  const themeReducer = useSelector(({ themeReducer }) => themeReducer);

  const handleThemeChange = (e) => {
    dispatch(ToggleTheme(e.target.checked))
  };
  const handleDegreesChange = (e) => {
    dispatch(ToggleDegrees(e.target.checked))
  };

  return (
    <Navbar
      bg={themeReducer.theme ? 'light' : 'dark'}
      variant={themeReducer.theme ? 'light' : 'dark'}
      expand='lg'
      className='border-0'
      fixed='bottom'
    >
      <Container>
        <Navbar.Brand className='mr-auto' style={{ fontSize: '14px', fontWeight: 'bold' }}>
          <span>Light</span>
          <Switch color='default' onChange={handleThemeChange}></Switch>
          <span>Dark</span>
        </Navbar.Brand>
        <Navbar.Brand className='ml-auto' style={{ fontSize: '14px', fontWeight: 'bold' }}>
          <span>°C</span>
          <Switch color='default' onChange={handleDegreesChange}></Switch>
          <span>°F</span>
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default Footer;