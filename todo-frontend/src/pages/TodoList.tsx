import React from "react";
import { Link } from "react-router-dom";
import { getTodoLists } from "../dummy-data";

const TodoList = () => {
    let todoLists = getTodoLists();
	return (
		<div>
			<h2>Her kommer TodoList til at være</h2>
            <nav>
                {
                    todoLists.map((todoList) => (
                        <div>
                            {todoList.todoListName};
                        </div>
                    ))
                }
            </nav>
            <div>
				<Link to="/">Tilbage til forsiden</Link>
			</div>
		</div>
	);
};

export default TodoList;
