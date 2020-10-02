import React from "react";
import { NavLink } from "react-router-dom";

function Login() {
	return (
		<div className="row justify-content-center align-items-center vh-100">
			<div className="col-md-4">
				<div className="text-center mb-3">
					Back to <NavLink to="/">Home</NavLink>
				</div>
				<div className="card">
					<div className="card-body">
						<form>
							<div className="mb-4">
								<label htmlFor="email" className="form-label">
									Email
								</label>
								<input type="email" name="email" id="email" className="form-control" />
							</div>

							<div className="mb-4">
								<label htmlFor="password" className="form-label">
									Password
								</label>
								<input type="password" name="password" id="password" className="form-control" />
							</div>

							<button type="submit" className="btn btn-primary">
								Login
							</button>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Login;
