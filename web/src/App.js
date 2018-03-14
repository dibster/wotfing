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
const MainPage = props => {
  switch (props.page) {
    case "contents":
      return (
        <div>
          <WfCardList />
        </div>
      );
    case "checkCode":
      return <div>Scan QR Code</div>;
    case "addToStorage":
      return <div>add to Storage</div>;
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

  handleBottomNav(pagestate) {
    this.setState({ page: pagestate });
  }

  render() {
    return (
      <MuiThemeProvider>
        <div>
          <WfHeader />
          <MainPage page={this.state.currentPage} />
          <WfFooter />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
