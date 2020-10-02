import React from "react";
import { NavLink } from "react-router-dom";

function Navbar({ children }) {
	return (
		<div>
			<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
				<div className="container-fluid">
					<a className="navbar-brand" href="#">
						My App
					</a>
					<button
						className="navbar-toggler"
						type="button"
						data-toggle="collapse"
						data-target="#navbarNav"
						aria-controls="navbarNav"
						aria-expanded="false"
						aria-label="Toggle navigation">
						<span className="navbar-toggler-icon"></span>
					</button>
					<div className="collapse navbar-collapse" id="navbarNav">
						<ul className="navbar-nav">
							<li className="nav-item">
								<NavLink exact className="nav-link" aria-current="page" to="/">
									Home
								</NavLink>
							</li>
							<li className="nav-item">
								<NavLink className="nav-link" to="/about">
									About
								</NavLink>
							</li>
							<li className="nav-item">
								<NavLink className="nav-link" to="/contact">
									Get Contact
								</NavLink>
							</li>
							<li className="nav-item">
								<NavLink className="nav-link" to="/users">
									Users
								</NavLink>
							</li>
						</ul>
					</div>
				</div>
			</nav>
			<div className="mt-4 container">{children}</div>
		</div>
	);
}

export default Navbar;
