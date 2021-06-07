import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import React, { useState } from 'react';
import ProjectList from "../ProjectList/ProjectList";
import useApplicationData from "../../hooks/useApplicationData";
import Home from "../Home/Home";
import Login from "../Login/Login";
import Register from "../Register/Register";
import Media from "../Media/Media";
import "./App.scss";

export default function App() {
  const { state } = useApplicationData();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const setAuth = (boolean) => {
    setIsAuthenticated(boolean);
  }

  return (
    <Router>
      <div className="App">
        <nav className="App-nav">
          <p className="title">JamSpace</p>
          <Link className="nav-link" to="/projects">
            PROJECTS
          </Link>
          <Link className="nav-link" to="/users">
            USERS
          </Link>
          <Link className="nav-link" to="/login">
            LOGIN
          </Link>
          <Link className="nav-link" to="/register">
            REGISTER
          </Link>
          <Link className="nav-link" to="/recorder">
            Recorder
          </Link>
          <Link className="nav-link" to="/">
            HOME
          </Link>
        </nav>
        <Switch>
          <Route exact path="/" render={props => !isAuthenticated ? <Home {...props} setAuth={setAuth}/> : <Link to="/login" />} >
            {/* <h1>JamSpace - Home</h1>
            <pre>{JSON.stringify(state, null, "\t")}</pre> */}
          </Route>
          <Route path="/projects" exact>
            <ProjectList />
          </Route>
          <Route path="/users" exact>
            <h1>I AM USERS</h1>
          </Route>
          <Route exact path="/login" render={props => !isAuthenticated ? <Login {...props} setAuth={setAuth}/> : <Link to="/" />} >
          </Route>
          <Route exact path="/register" render={props => !isAuthenticated ? <Register {...props} setAuth={setAuth}/> : <Link to ="/login" />} >
          </Route>
          <Route path="/recorder" exact>
            <Media />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
