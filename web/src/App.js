import React, { Component } from "react";
import "./App.css";

// Material UI
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
// Wf Components
import WfHeader from "./components/header/header";
import WfCardList from "./components/content/cardlist";
import WfFooter from "./components/footer/footer";

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div>
          <WfHeader />
          <WfCardList />
          <div style={{ position: "fixed", bottom: "0", width: "100%" }}>
            <WfFooter />
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
