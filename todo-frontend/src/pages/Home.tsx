import React, { useState } from "react";
import { Link } from "react-router-dom";
import HomepageTodoListView from "../components/HomepageTodoListView";
import Button from "../components/UI/Button";
import Modal from "../components/UI/Modal";
import { getTodoLists } from "../dummy-data";

const Home = () => {
	const [modalOpen, setModalOpen] = useState(false);
	let todoLists = getTodoLists();

	return (
		<div className="p-2.5 flex flex-col justify-center items-center pt-16 bg-off-white min-h-[100vh]">
			<h1 className="text-3xl font-semibold pb-2">Todo-lists:</h1>
			<HomepageTodoListView />
			<div>
				<Link to="/">Tilbage til forsiden</Link>
			</div>
			<button>
				<Link to="/TodoList">Til TodoLists!</Link>
			</button>
			<Button onClick={() => setModalOpen(true)}>Open Modal</Button>
			<Modal
				className="fade "
				isOpen={modalOpen}
				onClose={() => setModalOpen(false)}
			>
				<div>Hello</div>
			</Modal>
		</div>
	);
};

export default Home;
