import React, { FC, useEffect } from "react";
import { SubTask } from "../utils/todoTypes";
import SubTaskItem from "./SubTaskItem";
import { BsFillPlusSquareFill } from "react-icons/bs";

// export type SubTask = {
// 	subTaskId: number;
// 	subName: string;
// 	subDesc: string;
// 	subComplete: boolean;
// 	subDeleted: boolean;
// 	subDeadline: Date | string | null;
// 	subCompletionTime: Date | string | null;
// 	todoTaskId: number;
// };

type Props = {
	subTasks: SubTask[];
	onAddSubTask: (subTask: SubTask) => void;
	onRemoveSubTask: (id: number) => void;
	onSubTaskCompleted: (id: number) => void;
	onDescriptionChange: (id: number, desc: string) => void;
};

const SubTasks: FC<Props> = ({
	subTasks,
	onAddSubTask,
	onRemoveSubTask,
	onSubTaskCompleted,
	onDescriptionChange,
}) => {
	console.log("SubTasks.tsx: subTasks: ", subTasks);

	const renderSubtasks = () => {
		const tasks = subTasks.map((subTask) => {
			return (
				<SubTaskItem
					key={subTask.subTaskId}
					id={subTask.subTaskId}
					description={subTask.subDesc}
					completed={subTask.subComplete}
					deleted={subTask.subDeleted}
					onRemoveSubTask={(id: number) => onRemoveSubTask}
					onSubTaskCompleted={(id: number) => onSubTaskCompleted}
					onDescriptionChange={(id: number, desc: string) =>
						onDescriptionChange
					}
				/>
			);
		});
		return tasks;
	};

	return (
		<>
			{renderSubtasks()}
			<div className="flex items-center justify-center mt-2">
				<BsFillPlusSquareFill
					size={35}
					className="hover:font-semibold hover:cursor-pointer hover:scale-105 active:scale-95 text-light-blue text-opacity-75"
				/>
			</div>
		</>
	);
};

export default SubTasks;
