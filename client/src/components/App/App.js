import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";

const App = () => {
  return (
    <Router>
      <div className="App">
        <nav>
          <Link to="/projects">PROJECTS</Link>
          <Link to="/users">USERS</Link>
          <Link to="/login">LOGIN</Link>
          <Link to="/register">REGISTER</Link>
          <Link to="/">HOME</Link>
        </nav>
        <Switch>
          <Route path="/" exact>
            <h1>I AM HOME</h1>
          </Route>
          <Route path="/projects" exact>
            <h1>I AM PROJECTS</h1>
          </Route>
          <Route path="/users" exact>
            <h1>I AM USERS</h1>
          </Route>
          <Route path="/login" exact>
            <h1>I AM LOGIN</h1>
          </Route>
          <Route path="/register" exact>
            <h1>I AM REGISTER</h1>
          </Route>
        </Switch>
      </div>
    </Router>
  );
};
export default App;