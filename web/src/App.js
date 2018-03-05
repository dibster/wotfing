import React, { Component } from "react";
import "./App.css";

// Material UI
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
// Wf Components
import WfHeader from "./components/header/Header.js";

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
