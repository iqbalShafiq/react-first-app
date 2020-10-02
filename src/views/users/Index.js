import React, { useEffect, useState } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";

function Index() {
	const [users, setUsers] = useState([]);

	const getUsers = async () => {
		try {
			let response = await axios.get("http://jsonplaceholder.typicode.com/users");
			setUsers(response.data);
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		getUsers();
	}, []);

	return (
		<div className="row">
			{users.map((user, index) => {
				return (
					<div className="col-md-4 mb-3" key={index}>
						<div className="card">
							<div className="card-header">{user.name}</div>
							<div className="card-body">
								<div>
									<a href={`http://${user.website}`} target="_blank">
										{user.website}
									</a>
								</div>

								<div className="mt-3">
									<NavLink to={`/users/${user.id}`} className="btn btn-dark">
										Details
									</NavLink>
								</div>
							</div>
						</div>
					</div>
				);
			})}
		</div>
	);
}

export default Index;
