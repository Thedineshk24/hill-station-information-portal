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
// signin
import SignIn from "./pages/SignIn";
// signup
import SignUp from './pages/SignUp';
// slider
import Slider from './components/Slider';
// Admin
import NavbarAdmin from "./Admin/NavbarAdmin";
// Add
import Add from "./Admin/pages/AddData";
// Update
import Update from "./Admin/pages/UpdateData";
import DeleteData from './Admin/pages/DeleteData';

const App = () => {
  return (
    <Router>
      <Header />

      <Switch>
        <Route exact path="/">
          <Searchbar />
          <Slider />
          <Posts />
          { /*<Counter /> */}
        </Route>

        <Route exact path="/about">
          <About />
        </Route>

        <Route exact path="/contact">
          <Contact />
        </Route>

        <Route exact path="/signin">
          <SignIn />
        </Route>

        <Route exact path="/signup">
          <SignUp />
        </Route>

        <Route exact path="/admin">
          <NavbarAdmin /> 
          <Add />
        </Route>

        <Route exact path="/add">
          <NavbarAdmin /> 
          <Add />
        </Route>

        <Route exact path="/edit">
          <NavbarAdmin />
          <Update />
        </Route>

        <Route exact path="/delete">
          <NavbarAdmin />
          <DeleteData />
        </Route>

        {/* PAGE NOT FOUND*/}
        <Route path="*" component={Notfound}>
          <Searchbar />
          <Notfound />
        </Route>
      </Switch>
      <FooterComponent />
    </Router>
  );
}

export default App;
