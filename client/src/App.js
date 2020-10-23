import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './pages/Home';
import Blogs from './pages/Blogs';
import About from './pages/About';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ReadBlog from './pages/ReadBlog/ReadBlog';
import ThemeProvider from './context/ThemeContext';

const App = () => {
  return (
    <ThemeProvider>
      <Router>
        <div>
          <Header />

          <Switch>
            <Route path='/blog/:id' exact>
              <ReadBlog />
            </Route>
            <Route path='/about' exact>
              <About />
            </Route>
            <Route path='/blogs' exact>
              <Blogs />
            </Route>
            <Route path='/' exact>
              <Home />
            </Route>
          </Switch>
        </div>
        <Footer />
      </Router>
    </ThemeProvider>
  );
};

export default App;
