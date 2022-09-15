import React, { FC, useEffect, useState } from "react";
import { TbTrash } from "react-icons/tb";
import { useFetch } from "../Hooks/useFetch";
import BASE_PATH from "../utils/getRequests";
import { SubTask, TodoTask } from "../utils/todoTypes";
import CompressedSubTask from "./CompressedSubTask";
import TaskDetailed from "./taskDetailed/TaskDetailed";
import Modal from "./UI/Modal";

type Props = {
	task: TodoTask;
};

const CompressedTask: FC<Props> = ({ task }) => {
	const [checkBoxState, setCheckBoxState] = useState(false);
	const [modalOpen, setModalOpen] = useState(false);

	function handleCheckBoxClick() {
		setCheckBoxState(!checkBoxState);
		console.log(checkBoxState);
		// If checkbox is checked, then all subtasks should be set to completed
		// and vice versa
	}

	const [subTaskShowState, setSubTaskShowState] = useState(false);

	const { data, loading, error } = useFetch<SubTask[]>({
		url: `${BASE_PATH}/subtasks/${task.todoTaskId}`,
	});

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

	const handleTaskClick = () => {
		// Fold out subtasks
		console.log("Fold out subtasks");
		console.log(data);

		setSubTaskShowState(!subTaskShowState);
		console.log(subTaskShowState);
	};

	return (
		<div className="m-1 py-2 px-4 font-medium text-left text-black rounded-lg bg-zinc-50 hover:bg-zinc-100 active:bg-zinc-200 border-b border-gray-500 cursor-pointer ">
			<div className="flex w-full items-center">
				<div className="w-28">
					Complete:{" "}
					<input
						type="checkbox"
						checked={checkBoxState}
						onChange={handleCheckBoxClick}
					/>
				</div>
				<div
					className="flex flex-1 items-center w-12"
					onClick={handleTaskClick}
				>
					<div className="w-1/2">{task.taskName}</div>
					{/* Very crude conditional rendering :P */}
					<div className="md:w-1/2 md:opacity-100 opacity-0 w-0">
						{task.taskDesc}
					</div>
				</div>
				<div className="w-20">
					<button
						className="bg-blue-500 hover:bg-blue-700 text-white md:font-bold p-2 md:py-2  rounded col-span-1"
						onClick={() => setModalOpen(true)}
					>
						Edit task
					</button>
				</div>
				<div className="w-fit" onClick={handleDeleteIconClick}>
					<TbTrash className="text-4xl" />
				</div>
			</div>
			<div className="ml-6">
				{subTaskShowState &&
					data?.map((subTask) => <CompressedSubTask subTask={subTask} />)}
			</div>
			<Modal
				className="fade "
				isOpen={modalOpen}
				onClose={() => setModalOpen(false)}
			>
				<TaskDetailed
					taskId={task.todoTaskId}
					onAddTask={() => console.log("Task added")}
					header={task.taskName}
					onClose={() => setModalOpen(false)}
					name={task.taskName}
					desc={task.taskDesc}
					subTasks={task.subTasks || []}
				/>
			</Modal>
		</div>
	);
};

export default CompressedTask;
