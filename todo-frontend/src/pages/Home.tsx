import React from "react";
import { Link } from "react-router-dom";
import HomepageTodoListView from "../components/HomepageTodoListView";
import { getTodoLists } from "../dummy-data";


const Home = () => {
    let todoLists = getTodoLists();

	return (
		<div className="p-2.5">
			<h1>Todo-lists:</h1>
			<HomepageTodoListView/>
			<div>
				<Link to="/">Tilbage til forsiden</Link>
			</div>
		</div>
	);
};

export default Home;

