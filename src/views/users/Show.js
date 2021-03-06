import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useRecoilState } from "recoil";
import { theme } from "../../store";

function Show() {
	const [user, setUser] = useState([]);
	const [loading, setLoading] = useState(false);
	const [currentTheme, setCurrentTheme] = useRecoilState(theme);
	const defaultTheme = currentTheme == "dark" ? "bg-dark text-white" : "bg-light text-dark";
	let { identifier } = useParams();

	const getUser = async () => {
		setLoading(true);
		try {
			let response = await axios.get(`http://jsonplaceholder.typicode.com/users/${identifier}`);
			setLoading(false);
			setUser(response.data);
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		getUser();
	}, [identifier]);

	return (
		<div>
			{loading ? (
				<div className="text-center">Loading ...</div>
			) : (
				<div className={`card ${defaultTheme}`}>
					<div className="card-header">{user.name}</div>
					<div className="card-body">
						<div className="mb-3">{user.website}</div>
						<div className="mb-3">{user.phone}</div>
						<div className="mb-3">{user.email}</div>
					</div>
				</div>
			)}
		</div>
	);
}

export default Show;
