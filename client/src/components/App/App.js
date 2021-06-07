// import React from "react";
import "./App.scss";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import React, { useState } from 'react';
import { getCookie } from '../../helpers/cookie'
import ProjectList from "../ProjectList/ProjectList";
import useApplicationData from "../../hooks/useApplicationData";
import Home from "../Home/Home";
import Login from "../Login/Login";
import Register from "../Register/Register";
import Media from "../Media/Media";
// import {
//   getProjectsForUser,
//   getFilesForProject
// } from "../../helpers/selectors";

export default function App() {
  const { state, dispatch } = useApplicationData();
  console.log(state)

  const loggedInUser = getCookie('userAuth') 

  const user = state.users && state.users.length && state.users.find(user => {
    return user.email === loggedInUser
  })

  console.log(user)

  // const fakeUser = {
  //   id: 1,
  //   full_name: "Brooklynn Perez",
  //   email: "brooklynnp@gmail.com",
  //   password: "password",
  //   created_at: "2021-06-05T15:14:49.379Z"
  // };

  // const currentUserProjects = getProjectsForUser(state, fakeUser);

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
          <Route path="/" exact>
            <Home />
            <pre>{JSON.stringify(state, null, "\t")}</pre>
          </Route>
          <Route path="/projects" exact>
            <ProjectList />
          </Route>
          <Route path="/users" exact>
            <h1>I AM USERS</h1>
          </Route>
          <Route exact path="/login" render={props => <Login {...props} users={state.users} />} >
          </Route>
          <Route exact path="/register" render={props => <Register {...props} users={state.users} dispatch={dispatch} />} >
          </Route>
          <Route path="/recorder" exact>
            <Media />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
