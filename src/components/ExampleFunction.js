import React, { useState } from "react";

function ExampleFunction() {
	const [firstname, setFirstname] = useState("");
	const [lastname, setLastname] = useState("");
	const [name, setName] = useState("");

	const submitHandler = (e) => {
		e.preventDefault();
		setName(`${firstname} ${lastname}`);
		setFirstname("");
		setLastname("");
	};

	return (
		<div className="container py-4">
			<div className="col-md-4">
				<div className="card">
					<div className="card-header font-weight-bold">Stateless React Function</div>

					<div className="card-body">
						<form onSubmit={submitHandler}>
							<div className="mb-4">
								<label htmlFor="firstname" className="form-label">
									First name
								</label>
								<input type="text" value={firstname} onChange={(e) => setFirstname(e.target.value)} name="firstname" id="firstname" className="form-control" />
							</div>

							<div className="mb-4">
								<label htmlFor="lastname" className="form-label">
									Last name
								</label>
								<input type="text" value={lastname} onChange={(e) => setLastname(e.target.value)} name="lastname" id="lastname" className="form-control" />
							</div>

							<button type="submit" className="btn btn-primary">
								Submit
							</button>
						</form>
					</div>

					<div className="card-footer">Your name is {name ? name : ". . ."}</div>
				</div>
			</div>
		</div>
	);
}

export default ExampleFunction;
