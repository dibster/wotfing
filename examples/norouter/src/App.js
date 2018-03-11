import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
// history
const list = ["apple", "banana"];
const ENUM = {
  a: "1",
  b: "2",
  c: "3"
};

const Info = msg => {
  console.log("Info");
  return <h1> {msg} </h1>;
};

const Error = text => {
  return <div>This is an error {text}</div>;
};

const Warning = text => {
  return <div> "Warning" + {text} </div>;
};

const Page = props => {
  console.log(props);
  switch (props.state) {
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
        <Page text="fred" state="error" />
        <Page text="fred" state="info" />
        <Page text="fred" state="warning" />
      </div>
    );
  }
}

export default App;
