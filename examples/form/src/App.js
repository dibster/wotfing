import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

// Material UI
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";


import WfItemForm from "./components/itemform";

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
          <WfItemForm />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
