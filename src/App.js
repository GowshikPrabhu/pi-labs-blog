import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './pages/Home';
import Blogs from './pages/Blogs';
import About from './pages/About';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <div>
        <Header />

        <Switch>
          <Route path='/about'>
            <About />
          </Route>
          <Route path='/blogs'>
            <Blogs />
          </Route>
          <Route path='/'>
            <Home />
          </Route>
        </Switch>
      </div>
      <Footer />
    </Router>
  );
};

export default App;
