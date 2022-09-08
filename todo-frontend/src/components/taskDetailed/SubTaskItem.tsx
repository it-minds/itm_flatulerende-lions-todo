import React, { FC, useState } from "react";
import TextInput from "../UI/TextInput";
import { TbTrash } from "react-icons/tb";
import { SubTask } from "../../utils/todoTypes";

type Props = {
	description: string;
	id: number;
	completed: boolean;
	deleted: boolean;
	onRemoveSubTask: (id: number) => void;
	onSubTaskCompleted: (id: number) => void;
	onDescriptionChange: (id: number, desc: string) => void;
};

const SubTaskItem: FC<Props> = ({
	description,
	id,
	completed,
	deleted,
	onRemoveSubTask,
	onSubTaskCompleted,
	onDescriptionChange,
}) => {
	console.log("SubTaskItem.tsx: description: ", description);
	console.log("SubTaskItem.tsx: id: ", id);

	return (
		<div className="flex w-full h-full">
			<div className="flex justify-start w-fit max-w-[15%] pr-3">
				<input
					type="checkbox"
					className=" checked:bg-dark-blue w-5 hover:cursor-pointer checked:border-transparent"
					checked={completed}
					onChange={() => onSubTaskCompleted(id)}
				/>
			</div>
			<div className="flex flex-grow align-center">
				<TextInput
					onInput={(e) => onDescriptionChange(id, e.currentTarget.value)}
					id="subName"
					className="!w-full shadow-gray-300"
					value={description}
				/>
			</div>
			<div className="flex w-fit max-w-[15%] pl-3 justify-end">
				<div>
					<TbTrash
						size={31}
						className="hover:text-red-500 hover:font-semibold hover:cursor-pointer hover:scale-110"
						onClick={() => onRemoveSubTask(id)}
					/>
				</div>
			</div>
		</div>
	);
};

export default SubTaskItem;
