import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

// Material UI
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import RaisedButton from "material-ui/RaisedButton";

class App extends Component {
	render() {
		return (
			<MuiThemeProvider>
				<div className="App">
					<RaisedButton label="Default" />
				</div>

			</MuiThemeProvider>
		);
	}
}

export default App;
