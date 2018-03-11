import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
// pages
import Error from "./components/pages/error";

const list = ["apple", "banana"];

const Info = msg => {
  console.log("Info");
  return <h1> {msg} </h1>;
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

const List = () => {
  if (!list) {
    return null;
  }

  if (!list.length) {
    return <p>Sorry, the list is empty.</p>;
  } else {
    return <div>{list.map(item => item)}</div>;
  }
};

class App extends Component {
  render() {
    return (
      <div>
        <h1>Start</h1>
        <List />
        <Page text="fred" page="error" />
        <Page text="barney" page="info" />
        <Page text="ginger" page="warning" />
      </div>
    );
  }
}

export default App;
