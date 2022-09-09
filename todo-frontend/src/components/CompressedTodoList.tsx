import React, { FC, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { TbTrash } from "react-icons/tb";
import { TodoList } from "../utils/todoTypes";
import { useFetch } from "../Hooks/useFetch";
import BASE_PATH from "../utils/getRequests";

type Props = {
	todoList: TodoList;
};

const CompressedTodoList: FC<Props> = ({ todoList }) => {
	const navigate = useNavigate();
	const [checkBoxState, setCheckBoxState] = useState(false);
	const completeOpacity: string = " opacity-25";

	function handleGotoButtonClick() {
		navigate(`/TodoList/${todoList.todoListId}`);
	}

	function handleCheckBoxClick() {
		setCheckBoxState(!checkBoxState);
		console.log(checkBoxState);
	}

	const handleDeleteIconClick = async () => {
		const result = await confirm(
			`Are you sure you want to delete ${todoList.todoListName} (Id: ${todoList.todoListId})?`
		);
		if (result) {
			console.log("Deletion confirmed");
			return;
		}
		console.log("Deletion cancelled");
	};

	return (
		<div
			className={`"m-1 py-2 px-4 font-medium text-left text-black rounded-lg bg-zinc-50 hover:bg-zinc-100 border-b border-gray-500 ${
				checkBoxState ? "opacity-50" : ""
			}`}
		>
			<div className="grid grid-cols-11 gap-4 place-start">
				<label className="flex items-center justify-start justify-self-start gap-2 col-span-1 md:col-span-2 text-sm">
					<p className="w-0 opacity-0 md:w-full md:opacity-100">Complete: </p>
					<input
						type="checkbox"
						checked={checkBoxState}
						onChange={handleCheckBoxClick}
					/>
				</label>
				<div className="flex items-center md:col-span-3 col-span-6 justify-center md:justify-start">
					{todoList.todoListName}
				</div>
				<div className="flex items-center  md:col-span-3 col-span-0 opacity-0 md:opacity-100">
					{todoList.todoListDesc}
				</div>
				<button
					className="bg-blue-500 hover:bg-blue-700 text-white font-bold p-2 md:py-2 md:px-4 rounded col-span-2"
					onClick={handleGotoButtonClick}
				>
					Go to list
				</button>

				<TbTrash
					size={35}
					onClick={handleDeleteIconClick}
					className="self-center cursor-pointer"
				/>
				{/* <div
					className="flex items-center col-span-1 content-around ml-2 cursor-pointer"
					onClick={handleDeleteIconClick}
				>
					<TbTrash size={35} />
				</div> */}
			</div>
		</div>
	);
};

export default CompressedTodoList;
