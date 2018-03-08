import React from "react";
import "./App.css";
import Home from "./components/home";
import Navbar from "./components/navbar";

// router
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const Admin = () => <h1>Admin</h1>;
const Main = () => <h1>Main</h1>;

const App = () => (
  <div className="App">
    <header className="App-header">
      <Router>
        <div>
          <Route exact path="/" component={Main} />
          <Route path="/admin" component={Admin} />
          <Route strict path="/logs" render={() => <h1>Logs</h1>} />
          <Navbar />
        </div>
      </Router>
    </header>

    <p className="App-intro">
      To get started, edit <code>src/App.js</code> and save to reload.
    </p>
  </div>
);

export default App;
