import React, { FC, useState } from "react";
import { TodoList, TodoTask } from "../utils/todoTypes";
import Modal from "./UI/Modal";
import TextInput from "./UI/TextInput";

type Props = {
	tasks: TodoTask[];
	header: string;
	onAddTask: (task: TodoTask) => void;
	onClose?: () => void;
};

const AddTodo: FC<Props> = ({ tasks, header, onAddTask, onClose }) => {
	const [taskName, setTaskName] = useState("");

	return (
		<div className="flex flex-col w-full h-full bg-off-white">
			<h1 className="text-xl md:text-4xl text-brown-gray self-center">
				{header}
			</h1>
			<TextInput
				id="TodoName"
				label="Name"
				placeholder="What is the name of your todo?"
				className="text-xl md:text-2xl font-medium"
				onInput={(e) => setTaskName(e.currentTarget.value)}
				value={taskName}
			/>
		</div>
	);
};

export default AddTodo;
