import "./App.scss";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { getCookie, eraseCookie } from "../../helpers/cookie";
import {
  getProject,
  getFile,
  getProjectsForUser,
  getUsersForProject,
  getFilesForProject
} from "../../helpers/selectors";
import {
  SET_PROJECT,
  CLOSE_PROJECT,
  SET_FILE,
  CLOSE_FILE
} from "../../reducer/data_reducer";
import Project from "../Project/Project";
import ProjectList from "../ProjectList/ProjectList";
import useApplicationData from "../../hooks/useApplicationData";
import Home from "../Home/Home";
import Login from "../Login/Login";
import Register from "../Register/Register";
import Media from "../Media/Media";
import Player from "../Player/Player";

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

  const setFile = (fileId) => {
    closeFile();
    const file = getFile(state, fileId);
    console.log("setFile: ", file);
    dispatch({
      type: SET_FILE,
      file
    });
  };

  const closeProject = () => dispatch({ type: CLOSE_PROJECT });
  const closeFile = () => dispatch({ type: CLOSE_FILE });

  const currentUserProjects = user ? getProjectsForUser(state, user) : [];
  const currentProjectUsers = state.project
    ? getUsersForProject(state, state.project)
    : [];
  const currentProjectFiles = state.project
    ? getFilesForProject(state, state.project)
    : [];

  return (
    <Router>
      <div className="App">
        <nav className="App-nav">
          <div className="directional-links">
            <Link className="nav-logo" to="/">
              ♫))) JamSpace
            </Link>
            {user && (
              <Link className="nav-link" to="/projects">
                Projects
              </Link>
            )}
          </div>
          <div className="user-auth">
            {!user ? (
              <Link className="nav-link" to="/login">
                Login
              </Link>
            ) : (
              <p className="nav-user">Welcome, {user.full_name}</p>
            )}
            {!user ? (
              <Link className="nav-link" to="/register">
                Register
              </Link>
            ) : (
              <Link
                onClick={handleLogout}
                className="nav-link"
                id="logout"
                to="/"
              >
                Logout
              </Link>
            )}
          </div>
        </nav>
        <Switch>
          <Route path="/" exact>
            <Home />
            {/* <pre>{JSON.stringify(state.users, null, "\t")}</pre> */}
          </Route>
          <Route path="/projects" exact>
            {!user && <Login users={state.users} setUser={setUser} />}
            {user && !state.project && (
              <ProjectList
                projects={currentUserProjects}
                setProject={setProject}
                user={state.user}
                dispatch={dispatch}
              />
            )}
            {user && state.project && (
              <Project
                project={state.project}
                closeProject={closeProject}
                files={currentProjectFiles}
                users={currentProjectUsers}
                user={state.user}
                setFile={setFile}
                state={state}
                dispatch={dispatch}
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
