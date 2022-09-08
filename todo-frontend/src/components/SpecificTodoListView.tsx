import React from 'react'
import { useParams } from 'react-router-dom';
import { getTasksDummy } from '../dummy-data';
import { useFetch } from '../Hooks/useFetch';
import BASE_PATH from '../utils/getRequests';
import { TodoList, TodoTask } from '../utils/todoTypes';
import CompressedTask from './CompressedTask';

// Skal rimelig sikkert have en prop med der er et todo-liste-objekt
// Der fetches alle tasks fra backenden ud fra det id todo-listen har
// (Det er sådan det er sat op i backend)

const SpecificTodoListView = () => {
    
    const {todoListId} = useParams();    

    const {data, loading, error} = useFetch<TodoTask[]>({url: `${BASE_PATH}/tasks/${todoListId}`});

	return (
		<div className="bg-brown-gray box-border min-h-fit p-4 border-4 w-[95%] md:w-3/4 rounded-xl ">
            {loading && <div className="text-white flex items-center justify-center p-3">Loading......</div>}
			<div className="flex justify-center">
				<div className="w-full text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                    {data && data?.map((task) => (
						<CompressedTask task={task}/>
					))}
				</div>
			</div>
		</div>
	);
}

export default SpecificTodoListView