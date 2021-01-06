import React from 'react';
import { Counter } from './features/counter/Counter';
import "bootstrap/dist/css/bootstrap.min.css";

import './App.css';

import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom"

// Header
import Header from "./components/Header"
// footer
import FooterComponent from './components/FooterComponent';
// about
import About from './pages/About';
// contact
import Contact from './pages/Contact';
// notfound
import Notfound from './pages/Notfound';
// search
import Searchbar from "./components/Searchbar";
// post
import Posts from './pages/Posts';

const App = () => {
  return (
    <Router>
      <Header />
      <Searchbar />
      <Switch>
        <Route exact path="/">

          <Posts />
         { /*<Counter /> */}
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/contact">
          <Contact />
        </Route>

        {/* PAGE NOT FOUND*/}
        <Route path="*" component={Notfound}>
          <Notfound />
        </Route>
      </Switch>
      <FooterComponent />
    </Router>
  );
}

export default App;
