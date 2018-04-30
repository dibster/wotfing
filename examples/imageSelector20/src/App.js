import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import WfImageSelector from "./components/imageSelector";


class App extends Component {
  render() {
    return (
      <div className="App">
        <WfImageSelector />
      </div>
    );
  }
}

export default App;
