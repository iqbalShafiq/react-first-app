import React from "react";

function Card(props) {
	return (
		<div className="card h-100">
			<img src={props.content.image} alt="Cat" className="card-img-top h-75" />
			<div className="card-body p-3">
				<h4>{props.content.title}</h4>
				<p className="text-muted">{props.content.published}</p>
			</div>
		</div>
	);
}

export default Card;
