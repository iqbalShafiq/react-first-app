import React from "react";
import Card from "Card";

function ExampleUsingCard() {
	return (
		<div className="py-4 container">
			<div className="row">
				<div className="col-md-4 mb-4">
					<Card
						content={{
							image: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1027&q=80",
							title: "First Picture",
							published: "Published on 01 October 2020",
						}}
					/>
				</div>

				<div className="col-md-4 mb-4">
					<Card
						content={{
							image: "https://images.unsplash.com/photo-1494256997604-768d1f608cac?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1101&q=80",
							title: "Second Picture",
							published: "Published on 03 October 2020",
						}}
					/>
				</div>

				<div className="col-md-4 mb-4">
					<Card
						content={{
							image: "https://images.unsplash.com/photo-1515002246390-7bf7e8f87b54?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
							title: "Third Picture",
							published: "Published on 02 October 2020",
						}}
					/>
				</div>
			</div>
		</div>
	);
}

export default ExampleUsingCard;
