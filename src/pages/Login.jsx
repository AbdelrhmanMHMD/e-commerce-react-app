import React, { Component } from "react";
import Joi from "joi-browser";

class Login extends Component {
	state = { userName: "", password: "", errors: {} };

	schema = Joi.object({
		userName: Joi.string().required(),
		password: Joi.string().required(),
	});

	handleSubmit = (e) => {
		// prevent submit from reloading the page
		e.preventDefault();

		// call validate func
		const errors = this.validate();

		// check if there is error
		if (errors) {
			return;
		}

		// call backend
		console.log(`Submitted`);
	};

	handleChange = (e) => {
		// clone
		let state = { ...this.state };
		// edit
		state[e.currentTarget.name] = e.currentTarget.value;
		// setState
		this.setState(state);
	};

	validate = () => {
		//clone
		const errors = {};

		const state = { ...this.state };
		delete state.errors;

		//edit
		const res = Joi.validate(state, this.schema, { abortEarly: false });

		if (res.error != null) {
			for (let error of res.error.details) {
				errors[error.path] = error.message;
			}
		}

		//setState
		this.setState({ errors });
		return res.error === null ? null : errors;
	};

	render() {
		return (
			<React.Fragment>
				<div className="container">
					<h1>Login page</h1>

					<form onSubmit={this.handleSubmit} className="row g-3">
						<div className="col-md-6">
							<label htmlFor="username" className="form-label">
								Username
							</label>
							<input
								value={this.state.userName}
								onChange={this.handleChange}
								name="userName"
								autoFocus
								type="text"
								className="form-control"
								id="username"
							/>
							{this.state.errors.userName && (
								<div className="alert alert-danger">
									{this.state.errors.userName}
								</div>
							)}
						</div>
						<div className="col-md-6">
							<label htmlFor="password" className="form-label">
								Password
							</label>
							<input
								value={this.state.password}
								onChange={this.handleChange}
								name="password"
								type="password"
								className="form-control"
								id="password"
							/>
							{this.state.errors.password && (
								<div className="alert alert-danger">
									{this.state.errors.password}
								</div>
							)}
						</div>
						<div className="col-12">
							<div className="form-check">
								<input
									className="form-check-input"
									type="checkbox"
									id="gridCheck"
								/>
								<label
									className="form-check-label"
									htmlFor="gridCheck"
								>
									Check me out
								</label>
							</div>
						</div>
						<div className="col-12">
							<button type="submit" className="btn btn-primary">
								Sign in
							</button>
						</div>
					</form>
				</div>
			</React.Fragment>
		);
	}
}
export default Login;
