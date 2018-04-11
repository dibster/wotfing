import React from "react";
import Dialog from "material-ui/Dialog";
import FlatButton from "material-ui/FlatButton";
import TextField from "material-ui/TextField";

/**
 * Dialog with action buttons. The actions are passed in as an array of React objects,
 * in this example [FlatButtons](/#/components/flat-button).
 *
 * You can also close this dialog by clicking outside the dialog, or with the 'Esc' key.
 */
export default class Login extends React.Component {
	state = {
		open: false,
		emailerror: "",
		passwordError: "",
		userApiKey: ""
	};

	isLoggedIn = () => {
		if (localStorage.getItem("wotfingUserKey")) return false;
		else return false;
	};

	componentDidMount(props) {
		this.setState({ showMessage: true });
		this.setState({ registrationName: false });
		if (this.isLoggedIn()) {
			this.setState({ open: false });
		} else {
			this.setState({ open: true });
		}
	}

	handleOpen = () => {
		this.setState({ open: true });
	};

	handleClose = () => {
		this.setState({ open: false });
		console.log("Closed");
	};

	handleLogin = () => {
		this.setState({ open: false });
		console.log("this.state : " + JSON.stringify(this.state));

		//localStorage.setItem("wotfingUserKey", "XXXXYYY");
		console.log("Login");
	};

	handleRegister = () => {
		if (this.state.registrationName) {
			console.log("Create New User");
			console.log("this.state : " + JSON.stringify(this.state));

		}
		this.setState({ open: true });
		this.setState({ registrationName: true });
		console.log("Register");
	};

	render() {
		const actions = [
			<FlatButton
				label="Register"
				primary={false}
				onTouchTap={this.handleRegister}
			/>,
			<FlatButton
				label="Cancel"
				primary={false}
				onTouchTap={this.handleClose}
			/>,
			<FlatButton
				label="Login"
				primary={true}
				keyboardFocused={true}
				onTouchTap={this.handleLogin}
			/>
		];

		return (
			<div>
				<Dialog
					title="Sign In"
					actions={actions}
					modal={false}
					open={this.state.open}
					onRequestClose={this.handleClose}
				>
					<TextField
						hintText="me@wotfing.com"
						floatingLabelText="Email Address"
						errorText={this.state.emailerror}
						floatingLabelFixed={true}
						onChange={(e, newValue) => {
							this.setState({ emailaddress: newValue });
						}}
					/>
					{this.state.showMessage &&
						<div>
							{this.state.showMessage}
						</div>}

					<br />
					<TextField
						hintText="Password Field"
						floatingLabelText="Password"
						errorText={this.state.passwordError}
						type="password"
						onChange={(e, newValue) => this.setState({ password: newValue })}
					/>
					<br />
					{this.state.showMessage && <div>Cannot Log in</div>}
					{this.state.registrationName &&
						<div>
							<TextField
								hintText="Name"
								floatingLabelText="Name"
								onChange={(e, newValue) => this.setState({ name: newValue })}
							/>
						</div>}
				</Dialog>
			</div>
		);
	}
}

function isEmailValid(str) {
	const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return regex.test(str);
}
