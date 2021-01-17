import React from "react";
import { connect } from "react-redux";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import "./App.css";
import Collapse from "./components/Collapse";
// import MainMap from './components/Map/Map'
import Navbar from "./components/Navbar";
import Login from './components/Login'
import { HomePage } from "./components/HomePage/HomePage";

const App = (props) => {
  return (
    <>
      <Router>
        <Switch>
          <Route path='/login'><Login /></Route>

          <Route exact path='/'>
            <Navbar><HomePage /></Navbar>
          </Route>

          {/*
          <Route exact path={path}><MainMap /></Route>*/}
          <Route path='/friends'><Navbar><p>friends page</p></Navbar></Route>
          <Route exact path='/user'><Navbar><p>user page</p></Navbar></Route>
          <Route path='/user/:id'><Navbar><p>user info page</p></Navbar></Route>
          <Route path='/travel'><Navbar><p>travel page</p></Navbar></Route>
          <Route path='/test'><Collapse /></Route>
        </Switch>
      </Router>
    </>
  );
};

const mapStateToProps = (state) => {
  return state;
};
export default connect(mapStateToProps, null)(App);
