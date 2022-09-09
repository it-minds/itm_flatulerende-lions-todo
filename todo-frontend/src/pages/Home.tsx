import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AddTodo from "../components/AddTodo";
import HomepageTodoListView from "../components/HomepageTodoListView";
import Button from "../components/UI/Button";
import Modal from "../components/UI/Modal";
import { useFetch } from "../Hooks/useFetch";
import BASE_PATH from "../utils/getRequests";
import { addTodoList, TEST_TASK } from "../utils/postRequests";
import { SubTask, TodoList, TodoTask } from "../utils/todoTypes";

const TestTodoTasks: TodoTask[] = [TEST_TASK, TEST_TASK, TEST_TASK];

const Home = () => {
	const [modalOpen, setModalOpen] = useState(false);
	const [newTodoListFlipper, setNewTodoListFlipper] = useState(false);
	const [flipper, setFlipper] = useState(false);

	const { data, loading, error } = useFetch<TodoList[]>({
		url: `${BASE_PATH}/todoitems`,
		init: {},
		flipper: flipper
	});

	const handleTodoAdded = async (todo: TodoList) => {
		await addTodoList(todo);
		
		setFlipper(!flipper);
	};

	return (
		<div className="p-2.5 flex flex-col justify-center items-center pt-16 bg-off-white w-full min-h-[100vh] pb-24">
			<h1 className="text-3xl font-semibold pb-2">Todo-lists</h1>
			<Button onClick={() => setModalOpen(true)}>Add Todo List</Button>
			{loading && (
				<div className="text-white flex items-center justify-center p-3">
					Loading......
				</div>
			)}
			<HomepageTodoListView todoLists={data}/>
			<Modal
				className="fade "
				isOpen={modalOpen}
				onClose={() => setModalOpen(false)}
			>
				<AddTodo
					header="Add New Todo!"
					onAddTask={(newTodo) => handleTodoAdded(newTodo)}
					onClose={() => setModalOpen(false)}
					update={() => setNewTodoListFlipper(!newTodoListFlipper)}
				/>
			</Modal>
		</div>
	);
};

export default Home;
