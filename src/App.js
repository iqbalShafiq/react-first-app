import axios from "axios";
import React, { useEffect, useState } from "react";

function App() {
	const [user, setUser] = useState([]);
	const [identifier, setIdentifier] = useState(1);
	const [loading, setLoading] = useState(false);

	const getUser = async (e) => {
		setLoading(true);
		try {
			let response = await axios.get(`http://jsonplaceholder.typicode.com/users/${identifier}`);
			setUser(response.data);
			setLoading(false);
		} catch (error) {
			setLoading(true);
			console.log(error);
		}
	};

	useEffect(() => {
		getUser();
	}, [identifier]);

	return (
		<div className="py-4 container">
			<input type="text" value={identifier} onChange={(e) => setIdentifier(e.target.value)} name="identifier" id="identifier" className="form-control" />
			<table className="table">
				<thead>
					<tr>
						<th>Name</th>
						<th>Username</th>
						<th>Email</th>
						<th>Website</th>
						<th>Phone</th>
					</tr>
				</thead>
				{loading ? (
					"Loading ..."
				) : (
					<tbody>
						<tr>
							<th>{user.name}</th>
							<td>{user.username}</td>
							<td>{user.email}</td>
							<td>{user.website}</td>
							<td>{user.phone}</td>
						</tr>
					</tbody>
				)}
			</table>
		</div>
	);
}

export default App;
