import React, { FC, useEffect, useState } from "react";
import { SubTask } from "../../utils/todoTypes";
import SubTaskItem from "./SubTaskItem";
import { BsFillPlusSquareFill } from "react-icons/bs";
import { getSubTasks } from "../../utils/getRequests";

type Props = {
	subTasks: SubTask[];
	updated: () => void;
	onAddSubTask: (subTask: SubTask) => void;
	onRemoveSubTask: (id: number) => void;
	onSubTaskCompleted: (id: number) => void;
	onDescriptionChange: (id: number, desc: string) => void;
};

const SubTasks: FC<Props> = ({ subTasks, updated }) => {
	const [subTasksState, setSubTasksState] = useState<SubTask[]>(subTasks);

	useEffect(() => {
		fetchSubTasks();
		updated();
	}, []);

	const fetchSubTasks = async () => {
		const newSubtasks = await getSubTasks(subTasks[0].todoTaskId);

		if (newSubtasks) setSubTasksState(newSubtasks);
		else console.log("Something went wrong fetching subtasks");
		updated();
	};

	const renderSubtasks = () => {
		const tasks = subTasksState.map((subTask) => {
			return <SubTaskItem subItem={subTask} updated={fetchSubTasks} />;
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
