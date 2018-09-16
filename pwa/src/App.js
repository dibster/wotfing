import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

// Material UI
import "typeface-roboto";

// All components
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import Logout from "./components/Logout";
import QRCode from "./components/QRCode";
import Edit from "./components/Edit";
import Picture from "./components/Picture";
import Use from "./components/Use";
import Scan from "./components/Scan";
import Share from "./components/Share";
import Profile from "./components/Profile";
import MenuAppBar from "./components/Header";
import BottomNav from "./components/BottomNav";

const BasicExample = () => (
  <div>
    <Router>
      <div>
        <MenuAppBar />
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
        <Route path="/qr/:qrcode" component={QRCode} />
        <Route path="/edit" component={Edit} />
        <Route path="/picture" component={Picture} />
        <Route path="/use" component={Use} />
        <Route path="/share" component={Share} />
        <Route path="/scan" component={Scan} />
        <Route path="/profile" component={Profile} />
      </div>
    </Router>
    {/* <BottomNav /> */}
  </div>
);
export default BasicExample;
