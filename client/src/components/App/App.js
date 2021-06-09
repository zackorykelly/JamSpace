import "./App.scss";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { getCookie, eraseCookie } from "../../helpers/cookie";
import { getProject, getProjectsForUser } from "../../helpers/selectors";
import { SET_PROJECT, CLOSE_PROJECT } from "../../reducer/data_reducer";
import ProjectList from "../ProjectList/ProjectList";
import useApplicationData from "../../hooks/useApplicationData";
import Home from "../Home/Home";
import Login from "../Login/Login";
import Register from "../Register/Register";
import Media from "../Media/Media";

export default function App() {
  const { state, dispatch } = useApplicationData();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const loggedInUser = Number(getCookie('userAuth'))

    const u = state.users && state.users.length && state.users.find(user => {
      console.log('finduser', user.id)
      return user.id === loggedInUser
    })
    setUser(u)
  }, [state])

  const handleLogout = () => {
    eraseCookie("userAuth");
    setUser(null);
  };

  const setProject = (projectId) => {
    const project = getProject(state, projectId);
    dispatch({
      type: SET_PROJECT,
      project,
    });
  };

  const closeProject = () => dispatch({ type: CLOSE_PROJECT });

  const currentUserProjects = user ? getProjectsForUser(state, user) : [];

  return (
    <Router>
      <div className="App">
        <nav className="App-nav">
          <div className="directional-links">
          <Link className="nav-logo" to="/">
            JamSpace
          </Link>
          <Link className="nav-link" to="/projects">
            Projects
          </Link>
          <Link className="nav-link" to="/recorder">
            Recorder
          </Link>
          <Link className="nav-link" to="/">
            Home
          </Link>
          </div>
          <div className="user-auth">
          {!user ? <Link className="nav-link" to="/login">
            Login
          </Link>
            :
            <p>You are logged in as {user.full_name}</p>
          }
          {!user ?
            <Link className="nav-link" to="/register">
              Register
          </Link>
            :
            <Link onClick={handleLogout} className="nav-link" to="/">
              Logout
          </Link>
          }
          </div>
        </nav>
        <Switch>
          <Route path="/" exact>
            <Home />
            {/* <pre>{JSON.stringify(state.users, null, "\t")}</pre> */}
          </Route>
          <Route path="/projects" exact>
            {!user && <Login users={state.users} setUser={setUser} />}
            {user && (
              <ProjectList
                projects={currentUserProjects}
                setProject={setProject}
              />
            )}
          </Route>
          <Route path="/users" exact>
            <h1>I AM USERS</h1>
          </Route>
          <Route exact path="/login" render={props => <Login {...props} users={state.users} setUser={setUser} />} >
          </Route>
          <Route exact path="/register" render={props => <Register {...props} users={state.users} dispatch={dispatch} setUser={setUser} />} >
          </Route>
          <Route
            exact
            path="/login"
            render={(props) => <Login {...props} users={state.users} />}
          ></Route>
          <Route
            exact
            path="/register"
            render={(props) => (
              <Register {...props} users={state.users} dispatch={dispatch} />
            )}
          ></Route>
          <Route path="/recorder" exact>
            {!user && <Login users={state.users} setUser={setUser} />}
            {user && (
              <Media
                currentProject={1}
                currentUser={user}
                dispatch={dispatch}
              />
            )}
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
