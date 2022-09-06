import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
	return (
		<div>
			<h2>Det her er forsiden</h2>
			<div>
				<Link to="/">Tilbage til forsiden</Link>
			</div>
		</div>
	);
};

export default Home;

