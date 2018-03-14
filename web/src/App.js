import React, { Component } from "react";
import "./App.css";

// Material UI
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
// Wf Components
import WfHeader from "./components/header/header";
import WfFooter from "./components/footer/footer";
// List of COntainer Contents
import WfCardList from "./components/contents/cardlist";

// State to control flow of App
const PageRouter = props => {
  switch (props.page) {
    case "contents":
      return (
        <div>
          {/* <WfCardList /> */}
          Cards
        </div>
      );
    case "checkCode":
      return <div>Scan QR Code</div>;
    case "findItemForCode":
      return <div>Find Item For Code</div>;
    default:
      return null;
  }
};

class App extends Component {
  constructor(props) {
    super(props);
    // initil state
    this.state = { currentPage: "contents" };
    // handle bottom nac component
    const handleBottomNav = this.handleBottomNav.bind(this);
  }
  // Handle Page State
  handleBottomNav(pagestate) {
    this.setState({ currentPage: pagestate });
  }

  render() {
    let handleBottomNav = this.handleBottomNav;
    return (
      <MuiThemeProvider>
        <div>
          {/* Header */}
          <WfHeader />
          {/* Show content based on current page state */}
          <PageRouter page={this.state.currentPage} />
          {/* Footer at bottom */}
          <div style={{ position: "fixed", bottom: "0", width: "100%" }}>
            <WfFooter handleBottomNav={handleBottomNav.bind(this)} />
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
