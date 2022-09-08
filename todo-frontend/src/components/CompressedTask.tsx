import React, { FC, useEffect, useState } from "react";
import { TbTrash } from "react-icons/tb";
import { TodoTask } from "../utils/todoTypes";
import TaskDetailed from "./TaskDetailed";
import Modal from "./UI/Modal";

type Props = {
	task: TodoTask;
};

const CompressedTask: FC<Props> = ({ task }) => {
	const [checkBoxState, setCheckBoxState] = useState(false);
	const [modalOpen, setModalOpen] = useState(false);

	useEffect(() => {}, []);

	function handleCheckBoxClick() {
		setCheckBoxState(!checkBoxState);
		console.log(checkBoxState);
		// If checkbox is checked, then all subtasks should be set to completed
		// and vice versa
	}

	const handleDeleteIconClick = async () => {
		const result = await confirm(
			`Are you sure you want to delete ${task.taskName} (Id: ${task.todoTaskId})?`
		);
		if (result) {
			console.log("Deletion confirmed");
			return;
		}
		console.log("Deletion cancelled");
	};

	const handleEditButtonClick = () => {
		// Open task modal
	};

	return (
		<div className="m-1 py-2 px-4 font-medium text-left text-black rounded-lg bg-zinc-50 hover:bg-zinc-100 active:bg-zinc-200 border-b border-gray-500 cursor-pointer ">
			<div className="grid grid-cols-11 gap-4">
				<label className="col-span-2">
					Complete:{" "}
					<input
						type="checkbox"
						checked={checkBoxState}
						onChange={handleCheckBoxClick}
					/>
				</label>
				<div className="col-span-3">{task.taskName}</div>
				<div className="col-span-3">{task.taskDesc}</div>
				<div className="col-span-1"></div>
				<button
					className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded col-span-1"
					onClick={() => setModalOpen(true)}
				>
					Edit task
				</button>
				<div
					className="col-span-1 content-around ml-2"
					onClick={() => setModalOpen(true)}
				>
					<TbTrash size={35} />
				</div>
			</div>
			<Modal
				className="fade"
				isOpen={modalOpen}
				onClose={() => setModalOpen(false)}
			>
				<TaskDetailed
					onAddTask={() => console.log("Task added")}
					header={task.taskName}
					onClose={() => setModalOpen(false)}
					name={task.taskName}
					desc={task.taskDesc}
				/>
			</Modal>
		</div>
	);
};

export default CompressedTask;
