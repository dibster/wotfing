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
		passwordError: ""
	};

	componentDidMount(props) {
		console.log("In Constructor");
		this.setState({ open: true });
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
		console.log("Login");
	};

	handleRegister = () => {
		this.setState({ open: false });
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
					/>
					<br />
					<TextField
						hintText="Password Field"
						floatingLabelText="Password"
						errorText={this.state.passwordError}
						type="password"
					/>
					<br />
				</Dialog>
			</div>
		);
	}
}
