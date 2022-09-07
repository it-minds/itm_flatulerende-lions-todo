import React from "react";
import { Link } from "react-router-dom";

const TodoList = () => {
	return (
		<div>
			<h2>Her kommer TodoList til at være</h2>
            
            <div>
				<Link to="/">Tilbage til forsiden</Link>
			</div>
		</div>
	);
};

export default TodoList;
