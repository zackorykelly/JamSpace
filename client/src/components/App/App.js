// import React from "react";
import "./App.scss";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import { getCookie, eraseCookie } from '../../helpers/cookie'
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
  const [user, setUser] = useState(null);
  console.log('state', state)
  console.log('state.user', state.users)

  useEffect (() => {  
  const loggedInUser = Number(getCookie('userAuth') )


  const u = state.users && state.users.length && state.users.find(user => {
    console.log('finduser', user.id)
    return user.id === loggedInUser
  })
  setUser(u)
}, [state])


  console.log('user', user)



  const handleLogout = () => {
    eraseCookie('userAuth')
    setUser(null)
  }



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
          {!user ? <Link className="nav-link" to="/login">
            LOGIN
          </Link>
          :
          <p>You are logged in as {user.full_name}</p>
}
          {!user ?
          <Link className="nav-link" to="/register">
            REGISTER
          </Link>
          :
          <Link onClick={handleLogout} className="nav-link" to="/">
            LOGOUT
          </Link>
}

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
          <Route exact path="/login" render={props => <Login {...props} users={state.users} setUser={setUser}/>} >
          </Route>
          <Route exact path="/register" render={props => <Register {...props} users={state.users} dispatch={dispatch} setUser={setUser}/>} >
          </Route>
          <Route path="/recorder" exact>
            <Media />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
