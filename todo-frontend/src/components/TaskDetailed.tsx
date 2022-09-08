import React, { FC, useEffect, useState } from "react";
import { SubTask, TodoList } from "../utils/todoTypes";
import SubTaskItem from "./SubTaskItem";
import SubTasks from "./SubTasks";
import Button from "./UI/Button";
import TextArea from "./UI/TextArea";
import TextInput from "./UI/TextInput";

type Props = {
	header: string;
	onAddTask: (task: TodoList) => void;
	onClose: () => void;
	name?: string;
	desc?: string;
};

const dummySubtasks: SubTask[] = [
	{
		subTaskId: 1,
		subName: "Subtask 1",
		subDesc: "Subtask 1's description",
		subComplete: false,
		subDeleted: false,
		subDeadline: null,
		subCompletionTime: null,
		todoTaskId: 1,
	},
	{
		subTaskId: 2,
		subName: "Subtask 2",
		subDesc: "Subtask 2's description",
		subComplete: false,
		subDeleted: false,
		subDeadline: null,
		subCompletionTime: null,
		todoTaskId: 1,
	},
	{
		subTaskId: 3,
		subName: "Subtask 3",
		subDesc: "Subtask 3's description",
		subComplete: false,
		subDeleted: false,
		subDeadline: null,
		subCompletionTime: null,
		todoTaskId: 1,
	},
];

const TaskDetailed: FC<Props> = ({
	header,
	onAddTask,
	onClose,
	name,
	desc,
}) => {
	const [taskName, setTaskName] = useState<string>(name || "");
	const [description, setDescription] = useState<string>(desc || "");
	const [canAdd, setCanAdd] = useState<boolean>(taskName.length > 0);

	useEffect(() => {
		setCanAdd(taskName.length > 0);
	}, [taskName]);

	const handleAddTask = () => {
		const newTask: TodoList = {
			todoListId: 0,
			todoListName: taskName,
			todoListDesc: description,
			todoListDeleted: false,
			todoTasks: [],
		};
		onAddTask(newTask);
		// probably not necessary because of close
		// setTaskName("");
		// setDescription("");
		onClose();
	};

	return (
		<div className="flex flex-col w-full md:w-[30vw] h-full bg-off-white p-2 gap-y-1 md:gap-y-8">
			<h1 className="text-xl md:text-4xl text-brown-gray self-center">
				{header}
			</h1>
			<div className="flex flex-col gap-4 mb-8">
				<TextInput
					id="TodoName"
					label="Name"
					placeholder="Add a list name"
					className="text-lg md:text-2xl font-medium w-full"
					onInput={(e) => setTaskName(e.currentTarget.value)}
					value={taskName}
				/>
				<TextArea
					id="description"
					label="Description"
					placeholder="Add a description"
					onInput={(event) => setDescription(event.currentTarget.value)}
					value={description}
					className="md:text-lg w-full"
				/>
			</div>
			<div className="flex flex-col gap-1 w-full h-fit">
				<SubTasks
					onAddSubTask={(subTask: SubTask) => console.log(subTask)}
					onRemoveSubTask={(subId: number) => console.log(subId)}
					onSubTaskCompleted={(subId: number) => console.log(subId)}
					onDescriptionChange={(subId: number, desc: string) =>
						console.log(subId, desc)
					}
					subTasks={dummySubtasks}
				/>
			</div>
			<div className="flex justify-between mt-5">
				<Button disabled={!canAdd} onClick={handleAddTask}>
					Save
				</Button>
				<Button
					className="bg-btn-cancel hover:bg-btn-cancel-focus "
					onClick={() => onClose()}
				>
					Cancel
				</Button>
			</div>
		</div>
	);
};

export default TaskDetailed;
