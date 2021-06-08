import React from "react";
import "./App.scss";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { getCookie } from "../../helpers/cookie";
import ProjectList from "../ProjectList/ProjectList";
import useApplicationData from "../../hooks/useApplicationData";
import Home from "../Home/Home";
import Login from "../Login/Login";
import Register from "../Register/Register";
import Media from "../Media/Media";
import { getProjectsForUser } from "../../helpers/selectors";

export default function App() {
  const { state, dispatch } = useApplicationData();
  const history = useHistory();
  const handleClick = () => history.push("/projects");

  const loggedInUser = getCookie("userAuth");

  const user =
    state.users &&
    state.users.length &&
    state.users.find((user) => {
      return user.email === loggedInUser;
    });

  console.log("logged in user: ", user);

  const currentUserProjects = user
    ? getProjectsForUser(state, user)
    : state.projects;

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
            <p>User: {JSON.stringify(user.full_name, null, "\t")}</p>
            <ProjectList projects={currentUserProjects} />
          </Route>
          <Route path="/users" exact>
            {console.log("state.user: ", state.user)}
            <pre>{JSON.stringify(state.users, null, "\t")}</pre>
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
            <Media />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
