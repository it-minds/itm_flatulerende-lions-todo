import React, { useState } from "react";
import { Link } from "react-router-dom";
import AddTodo from "../components/AddTodo";
import HomepageTodoListView from "../components/HomepageTodoListView";
import Button from "../components/UI/Button";
import Modal from "../components/UI/Modal";
import { TEST_TASK } from "../utils/postRequests";
import { SubTask, TodoList, TodoTask } from "../utils/todoTypes";

const TestTodoTasks: TodoTask[] = [TEST_TASK, TEST_TASK, TEST_TASK];

const Home = () => {
	const [modalOpen, setModalOpen] = useState(false);
	// let todoLists = getTodoListsDummy();

	const handleTodoAdded = (todo: TodoList) => {
		console.log(todo);
	};

	return (
		<div className="p-2.5 flex flex-col justify-center items-center pt-16 bg-off-white w-full min-h-[100vh] pb-24">
			<h1 className="text-3xl font-semibold pb-2">Todo-lists</h1>
			<Button onClick={() => setModalOpen(true)}>Add Todo List</Button>
			<HomepageTodoListView />
			{/* Er det ikke okay at fjerne det her ?  */}

			{/* <div>
				<Link to="/">Tilbage til forsiden</Link>
			</div>
			<button>
				<Link to="/TodoList">Til TodoLists!</Link>
			</button> */}
			<Modal
				className="fade "
				isOpen={modalOpen}
				onClose={() => setModalOpen(false)}
			>
				<AddTodo
					header="Add New Todo!"
					onAddTask={(newTodo) => handleTodoAdded(newTodo)}
					onClose={() => setModalOpen(false)}
				/>
			</Modal>
		</div>
	);
};

export default Home;
