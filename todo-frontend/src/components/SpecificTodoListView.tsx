import React from 'react'
import { getTasksDummy } from '../dummy-data';
import CompressedTask from './CompressedTask';

const SpecificTodoListView = () => {
    let tasks = getTasksDummy();

	return (
		<div className="bg-brown-gray box-border min-h-fit p-4 border-4 w-[95%] md:w-3/4 rounded-xl ">
			<div className="flex justify-center">
				<div className="w-full text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 dark:bg-gray-700 dark:border-gray-600 dark:text-white">
					{tasks.map((task) => (
						<CompressedTask task={task}/>
					))}
				</div>
			</div>
		</div>
	);
}

export default SpecificTodoListView