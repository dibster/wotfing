import React, { Component } from "react";
import "./App.css";

// Material UI
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
// Wf Components
import WfHeader from "./components/header/Header.js";
// Test Data
import { testLogin, testFings } from "./mocks/data.js";
console.log(testLogin());
console.log(testFings());
class App extends Component {
	render() {
		return (
			<MuiThemeProvider>
				<div>
					<WfHeader />
				</div>

			</MuiThemeProvider>
		);
	}
}

export default App;
