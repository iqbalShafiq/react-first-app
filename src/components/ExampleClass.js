import React, { Component } from "react";

class ExampleClass extends Component {
	constructor() {
		super();

		this.state = {
			firstname: "",
			lastname: "",
			name: "",
		};
	}

	changeHandler = (e) => {
		this.setState({
			[e.target.name]: e.target.value,
		});
	};

	submitHandler = (e) => {
		e.preventDefault();
		this.setState({
			name: `${this.state.firstname} ${this.state.lastname}`,
			firstname: "",
			lastname: "",
		});
	};

	render() {
		const { name } = this.state;

		return (
			<div className="py-4">
				<div className="container">
					<div className="col-md-4">
						<div className="card">
							<div className="card-header">React Form</div>

							<div className="card-body">
								<form onSubmit={this.submitHandler}>
									<div className="mb-4">
										<label htmlFor="firstname" className="form-label">
											First Name
										</label>
										<input type="text" value={this.state.firstname} onChange={this.changeHandler} className="form-control" name="firstname" id="firstname" />
									</div>

									<div className="mb-4">
										<label htmlFor="lastname" className="form-label">
											First Name
										</label>
										<input type="text" value={this.state.lastname} onChange={this.changeHandler} className="form-control" name="lastname" id="lastname" />
									</div>

									<button type="submit" className="btn btn-primary">
										Submit
									</button>
								</form>
							</div>

							<div className="card-footer">Your name {name ? name : ". . ."}</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default ExampleClass;
