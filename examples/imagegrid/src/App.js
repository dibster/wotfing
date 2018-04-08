import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

// Material UI
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";


import WfImageGrid from "./components/imageGrid";

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
          <WfImageGrid />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
