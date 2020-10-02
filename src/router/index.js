import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "../views/Home";
import About from "../views/About";
import Contact from "../views/Contact";
import Navbar from "../components/Navbar";
import NotFound from "../views/errors/NotFound";
import Login from "../views/auth/Login";
import Index from "../views/users/Index";
import Show from "../views/users/Show";

function Router() {
	return (
		<Switch>
			<Route exact path="/">
				<Navbar>
					<Home />
				</Navbar>
			</Route>

			<Route path="/about">
				<Navbar>
					<About />
				</Navbar>
			</Route>

			<Route path="/contact">
				<Navbar>
					<Contact />
				</Navbar>
			</Route>

			<Route exact path="/users">
				<Navbar>
					<Index />
				</Navbar>
			</Route>

			<Route path="/users/:identifier">
				<Navbar>
					<Show />
				</Navbar>
			</Route>

			<Route path="/login" component={Login} />
			<Route path="*" component={NotFound} />
		</Switch>
	);
}

export default Router;
