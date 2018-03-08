import React, { Component } from "react";
// router
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
// styles
import "./App.css";

// Material UI
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
// Wf Components
import WfHeader from "./components/header/header";
import WfCardList from "./components/contents/cardlist";
import WfFooter from "./components/footer/footer";
// admin test
const Admin = () => <h1>Admin</h1>;

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div>
          <Router>
            <div>
              <WfHeader />
              <div>
                <Route exact path="/" component={WfCardList} />
                <Route path="/admin" component={Admin} />
              </div>
              <div style={{ position: "fixed", bottom: "0", width: "100%" }}>
                <WfFooter />
              </div>
            </div>
          </Router>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
