import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
// pages
import Error from "./components/pages/error";
import WarningButton from "./components/buttons/warning";
/*global handleBottomNav*/
const list = ["apple", "banana"];

const Info = msg => {
  console.log("Info");
  return <div> I am displaying this page : {msg} </div>;
};

const Warning = text => {
  return <div> "Warning" + {text} </div>;
};

const Page = props => {
  console.log(props);
  switch (props.page) {
    case "info":
      return Info(props.text);
    case "warning":
      return Warning(props.text);
    case "error":
      return Error(props.text);
    default:
      return null;
  }
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { isToggleOn: true, page: "error" };
    this.showInfo = this.showInfo.bind(this);
    const handleBottomNav = this.handleBottomNav.bind(this);
    let page = "";
  }

  handleBottomNav(pagestate) {
    //alert("We pass argument from Child to Parent: " + pagestate);
    this.setState({ page: pagestate });
  }

  showInfo() {
    this.setState({ page: "info" });
  }

  render() {
    let handleBottomNav = this.handleBottomNav;
    return (
      <div>
        <h1>Start</h1>
        <Page text="fred" page={this.state.page} />
        <WarningButton handleBottomNav={handleBottomNav.bind(this)} />
      </div>
    );
  }
}

export default App;
