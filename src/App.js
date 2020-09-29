import React, { Component } from "react";
import axios from "axios";

class App extends Component {
	constructor() {
		super();

		this.state = {
			user: [],
		};
	}

	getUser = async () => {
		let response = await axios.get(
			"http://jsonplaceholder.typicode.com/users/1"
		);
		this.setState({
			user: response.data,
		});
	};

	componentDidMount() {
		this.getUser();
	}

	render() {
		const { user } = this.state;

		return (
			<div>
				<div>Hello {user.name}</div>
				<div>Your username is {user.username}</div>
			</div>
		);
	}
}

export default App;
