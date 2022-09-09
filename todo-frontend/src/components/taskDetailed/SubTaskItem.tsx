import React, { FC, useState } from "react";
import TextInput from "../UI/TextInput";
import { TbTrash } from "react-icons/tb";
import { SubTask } from "../../utils/todoTypes";
import { updateSubTask } from "../../utils/putRequests";

type Props = {
	subItem: SubTask;
	updated: () => void;
};

const SubTaskItem: FC<Props> = ({ subItem, updated }) => {
	const [subTaskState, setSubTaskState] = useState({
		subTaskId: subItem.subTaskId,
		subName: subItem.subName,
		subDesc: subItem.subDesc,
		subComplete: subItem.subComplete,
		subDeleted: subItem.subDeleted,
		subDeadline: subItem.subDeadline,
		subCompletionTime: subItem.subCompletionTime,
		todoTaskId: subItem.todoTaskId,
	});

	const softDeleteSubTask = async () => {
		const subTask: SubTask = {
			...subItem,
			subDeleted: true,
		};
		const success = await updateSubTask(subTaskState);
		if (success) console.log("SubTaskItem.tsx: softDeleteSubTask: success");
	};

	const onToggleComplete = async () => {
		const success = await updateSubTask({
			...subTaskState,
			subComplete: !subTaskState.subComplete,
		});
		// updated();

		setSubTaskState((prev) => ({
			...prev,
			subComplete: !prev.subComplete,
		}));

		updated();
		console.log("SubTaskItem.tsx: onToggleComplete: success");

		console.log(success);
	};

	const onNameChange = () => {
		if (subTaskState.subName !== subItem.subName) {
			updateSubTask(subTaskState);
			console.log("name updated");
		}
	};

	return (
		<div className="flex w-full h-full items-center">
			<div className="flex justify-start w-fit max-w-[15%] pr-3">
				<input
					type="checkbox"
					className=" checked:bg-dark-blue w-5 hover:cursor-pointer checked:border-transparent"
					checked={subTaskState.subComplete}
					onChange={() => onToggleComplete()}
				/>
			</div>
			<div className="flex flex-grow align-center">
				<TextInput
					onBlur={() => onNameChange}
					onInput={(e) =>
						setSubTaskState({ ...subTaskState, subName: e.currentTarget.value })
					}
					id="subName"
					className="!w-full shadow-gray-300"
					value={subTaskState.subName}
				/>
			</div>
			<div className="flex w-fit max-w-[15%] pl-3 justify-end">
				<div>
					<TbTrash
						size={31}
						className="hover:text-red-500 hover:font-semibold hover:cursor-pointer hover:scale-110"
						onClick={() =>
							setSubTaskState({ ...subTaskState, subDeleted: true })
						}
					/>
				</div>
			</div>
		</div>
	);
};

export default SubTaskItem;
