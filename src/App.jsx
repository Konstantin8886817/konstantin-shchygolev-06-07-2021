import { BrowserRouter as Router, Route } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';

import HomeLayout from './layoutes/HomeLayout';
import FavoritesLayout from './layoutes/FavoritesLayout';
import { useSelector } from 'react-redux';

import night from './images/night.jpg';
import day from './images/day.jpg';

const App = () => {
  const themeReducer = useSelector(({ themeReducer }) => themeReducer);

  const style = themeReducer.theme
    ? {
        background: `url(${day}) no-repeat`,
        backgroundSize: 'cover',
        backgroundColor: '#2197c9',
        minHeight: '100vh',
        color: 'black',
      }
    : {
        background: `url(${night}) no-repeat`,
        backgroundSize: 'cover',
        backgroundColor: '#1c2949',
        minHeight: '100vh',
        color: 'white',
      }
  return (
    <Router>
      <Header />
      <div style={style}>
        <Route path='/' component={HomeLayout} exact />
        <Route path='/favorite' component={FavoritesLayout} />
      </div>
      <Footer />
    </Router>
  );
};

export default App;
