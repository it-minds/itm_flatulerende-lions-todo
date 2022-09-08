import React, { useEffect, useState } from "react";
import { getTodoListsDummy } from "../dummy-data";
import { useFetch } from "../Hooks/useFetch";
import BASE_PATH, { getTodos } from "../utils/getRequests";
import { TodoList } from "../utils/todoTypes";
import CompressedTodoList from "./CompressedTodoList";

const HomepageTodoListView = () => {

	const {data, loading, error} = useFetch<TodoList[]>({url: `${BASE_PATH}/todoitems`});

	return (
		<div className="bg-brown-gray box-border min-h-fit p-4 border-4 w-[95%] md:w-3/4 rounded-xl ">
			<div className="flex justify-center">
				<div className="w-full text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 dark:bg-gray-700 dark:border-gray-600 dark:text-white">
					{data && data?.map((todoList) => (
						<CompressedTodoList todoList={todoList} />
					))}
				</div>
			</div>
		</div>
	);
};

export default HomepageTodoListView;
