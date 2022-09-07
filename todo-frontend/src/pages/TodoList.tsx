import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const TodoList = () => {

    const {todoListId} = useParams();
    const [todoList, setTodoList] = useState([]);

    useEffect(() => {
        if (!todoListId) {
            return;
        }
        console.log(todoListId); // Skal byttes ud med vores fetch kald
    }, [todoListId])
    
	return (
		<div>
			<h2>Her kommer TodoList til at være</h2>
            
            <div>
				<Link to="/">Tilbage til forsiden</Link>
                
			</div>
		</div>
	);
};

/* Skal indeholde en knap der router tilbage til home */

export default TodoList;
