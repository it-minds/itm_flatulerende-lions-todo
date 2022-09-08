import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import SpecificTodoListView from "../components/SpecificTodoListView";

const TodoList = () => {

    const {todoListId} = useParams(); // when the URL parameter changes, the useEffect is triggered
    const [todoList, setTodoList] = useState([]);

    useEffect(() => {
        if (!todoListId) {
            return;
        }
        console.log(todoListId); // Skal byttes ud med vores fetch kald
    }, [todoListId])
    
	return (
		<div className="p-2.5 flex flex-col justify-center items-center pt-16 bg-off-white min-h-[100vh]">
			<h1 className="text-3xl font-semibold pb-2">Tasks:</h1>
			<SpecificTodoListView />
			<div>
				<Link to="/">Tilbage til forsiden</Link>
			</div>
		</div>
	);
};

export default TodoList;
