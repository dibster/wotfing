import React from "react";
import "./App.css";
import wfHome from "./components/home";

// router
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const Home = () => <h1>Home</h1>;
const Admin = () => <h1>Admin</h1>;
const NavBar = () => (
  <ul>
    <li>
      <Link to="/" />
    </li>
    <li>
      <Link to="/admin">Admin</Link>
    </li>
  </ul>
);

const App = () => (
  <div className="App">
    <header className="App-header">
      <Router>
        <div>
          <Route exact path="/" component={NavBar} />
          <Route path="/admin" component={Admin} />
          <Route strict path="/logs" render={() => <h1>Logs</h1>} />
          <Route
            path="/children"
            children={props => {
              console.info(props);
              return null;
            }}
            children={NavBar}
          />
        </div>
      </Router>
    </header>

    <p className="App-intro">
      To get started, edit <code>src/App.js</code> and save to reload.
    </p>
  </div>
);

export default App;
