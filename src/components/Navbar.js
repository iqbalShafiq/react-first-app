import React from "react";
import { NavLink } from "react-router-dom";
import { useRecoilState } from "recoil";
import { useRecoilValue } from "recoil";
import { authUser, theme } from "../store";

function Navbar({ children }) {
	const { user } = useRecoilValue(authUser);
	const [currentTheme, setCurrentTheme] = useRecoilState(theme);

	const defaultTheme = currentTheme == "dark" ? "navbar-dark bg-dark" : "navbar-light bg-light";

	return (
		<div>
			<nav className={`navbar navbar-expand-lg ${defaultTheme}`}>
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
					<div className="collapse navbar-collapse d-flex justify-content-between align-items-center" id="navbarNav">
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

							<li className="nav-item">
								<NavLink className="nav-link" to={`/users/${user.id}`}>
									{user.name}
								</NavLink>
							</li>
						</ul>

						<ul className="navbar-nav">
							<li className="nav-item">
								<select
									value={currentTheme}
									onChange={(e) => setCurrentTheme(e.target.value)}
									class="form-select bg-dark text-light btn-outline-dark"
									aria-label="Default select example">
									<option value="dark">Dark</option>
									<option value="light">Light</option>
								</select>
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
