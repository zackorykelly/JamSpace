import "./App.scss";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { getCookie, eraseCookie } from "../../helpers/cookie";
import {
  getProject,
  getProjectsForUser,
  getFilesForProject
} from "../../helpers/selectors";
import { SET_PROJECT, CLOSE_PROJECT } from "../../reducer/data_reducer";
import Project from "../Project/Project";
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
    const loggedInUser = Number(getCookie("userAuth"));

    const u =
      state.users &&
      state.users.length &&
      state.users.find((user) => {
        return user.id === loggedInUser;
      });
    setUser(u);
  }, [state]);

  const handleLogout = () => {
    eraseCookie("userAuth");
    setUser(null);
  };

  const setProject = (projectId) => {
    const project = getProject(state, projectId);
    dispatch({
      type: SET_PROJECT,
      project
    });
  };

  const closeProject = () => dispatch({ type: CLOSE_PROJECT });

  const currentUserProjects = user ? getProjectsForUser(state, user) : [];
  const currentProjectFiles = state.project
    ? getFilesForProject(state, state.project)
    : [];

  return (
    <Router>
      <div className="App">
        <nav className="App-nav">
          <p className="title">JamSpace</p>
          <Link className="nav-link" to="/projects">
            PROJECTS
          </Link>
          {!user ? (
            <Link className="nav-link" to="/login">
              LOGIN
            </Link>
          ) : (
            <p>You are logged in as {user.full_name}</p>
          )}
          {!user ? (
            <Link className="nav-link" to="/register">
              REGISTER
            </Link>
          ) : (
            <Link onClick={handleLogout} className="nav-link" to="/">
              LOGOUT
            </Link>
          )}

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
            {!user && <Login users={state.users} setUser={setUser} />}
            {user && !state.project && (
              <ProjectList
                projects={currentUserProjects}
                setProject={setProject}
              />
            )}
            {user && state.project && (
              <Project
                project={state.project}
                closeProject={closeProject}
                files={currentProjectFiles}
              />
            )}
          </Route>
          <Route
            exact
            path="/login"
            render={(props) => (
              <Login {...props} users={state.users} setUser={setUser} />
            )}
          ></Route>
          <Route
            exact
            path="/register"
            render={(props) => (
              <Register
                {...props}
                users={state.users}
                dispatch={dispatch}
                setUser={setUser}
              />
            )}
          ></Route>
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
            {user && <Media />}
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
