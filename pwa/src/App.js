import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Logout from "./pages/Logout";
import QRCode from "./pages/QRCode";
import Edit from "./pages/Edit";
import Picture from "./pages/Picture";
import Use from "./pages/Use";
import Scan from "./pages/Scan";
import Share from "./pages/Share";

class Home extends React.Component {
  render() {
    return <h1>Home, {this.props.name}</h1>;
  }
}

// function About() {
//   console.log(window.location.href);
//   return (
//     <div>
//       <h2>About</h2>
//     </div>
//   );
// }

const ShowContents = () => {
  const url = window.location.href;
  const location = url.substr(url.lastIndexOf("/") + 1);
  return (
    <div>
      <h2>About : {location}</h2>
    </div>
  );
};

const Topic = ({ match }) => (
  <div>
    <h3>{match.params.topicId}</h3>
  </div>
);

const Topics = ({ match }) => (
  <div>
    <h2>Topics</h2>
    <ul>
      <li>
        <Link to={`${match.url}/rendering`}>Rendering with React</Link>
      </li>
      <li>
        <Link to={`${match.url}/components`}>Components</Link>
      </li>
      <li>
        <Link to={`${match.url}/props-v-state`}>Props v. State</Link>
      </li>
    </ul>

    <Route path={`${match.path}/:topicId`} component={Topic} />
    <Route
      exact
      path={match.path}
      render={() => <h3>Please select a topic.</h3>}
    />
  </div>
);

const BasicExample = () => (
  <Router>
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/register">register</Link>
        </li>
        <li>
          <Link to="/logout">Logout</Link>
        </li>
        <li>
          <Link to="/qr">QR Code</Link>
        </li>
        <li>
          <Link to="/edit">Edit Code</Link>
        </li>
        <li>
          <Link to="/picture">Take Picture for Code</Link>
        </li>
        <li>
          <Link to="/use">Use QR Code</Link>
        </li>
        <li>
          <Link to="/share">Share QR Code</Link>
        </li>
        <li>
          <Link to="/scan">Scan Code</Link>
        </li>
      </ul>

      <hr />

      <Route exact path="/" component={Home} />
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
      <Route path="/logout" component={Logout} />
      <Route path="/qr" component={QRCode} />
      <Route path="/edit" component={Edit} />
      <Route path="/picture" component={Picture} />
      <Route path="/use" component={Use} />
      <Route path="/share" component={Share} />
      <Route path="/scan" component={Scan} />
    </div>
  </Router>
);
export default BasicExample;
