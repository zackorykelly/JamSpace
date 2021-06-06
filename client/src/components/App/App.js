import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import ProjectList from "../ProjectList/ProjectList";
import useApplicationData from "../../hooks/useApplicationData";
import Login from "../Login/Login";
import Register from "../Register/Register";
import Media from "../Media/Media";
import "./App.css";

export default function App() {
  const { state } = useApplicationData();

  return (
    <Router>
      <div className="App">
        <nav>
          <Link to="/projects">PROJECTS</Link>
          <Link to="/users">USERS</Link>
          <Link to="/login">LOGIN</Link>
          <Link to="/register">REGISTER</Link>
          <Link to="/recorder">Recorder</Link>
          <Link to="/">HOME</Link>
        </nav>
        <Switch>
          <Route path="/" exact>
            <h1>JamSpace - Home</h1>
            <pre>{JSON.stringify(state, null, "\t")}</pre>
          </Route>
          <Route path="/projects" exact>
            <ProjectList />
          </Route>
          <Route path="/users" exact>
            <h1>I AM USERS</h1>
          </Route>
          <Route path="/login" exact>
            <Login />
          </Route>
          <Route path="/register" exact>
            <Register />
          </Route>
          <Route path="/recorder" exact>
            <Media />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
