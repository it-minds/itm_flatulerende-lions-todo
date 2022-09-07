import React from "react";
import { Link } from "react-router-dom";
import { getTodoLists } from "../dummy-data";


const Home = () => {
    let todoLists = getTodoLists();

	return (
		<div>
			<h2>Det her er forsiden</h2>
			<div>
                {
                    todoLists.map((todoList) => (
                        <div>
                            {todoList.todoListName};
                        </div>
                    ))
                }
            </div>
			<div>
				<Link to="/">Tilbage til forsiden</Link>
			</div>
		</div>
	);
};

export default Home;

