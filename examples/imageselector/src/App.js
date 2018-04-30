import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

// Material UI
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";


import WfImageSelector from "./components/imageSelector";

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
          <WfImageSelector />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
