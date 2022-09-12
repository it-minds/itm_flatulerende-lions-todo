import BASE_PATH from "./getRequests";
import { TEST_TODO } from "./postRequests";
import { SubTask, TodoList, TodoTask } from "./todoTypes";

export async function updateTodoList(todoItems: TodoList): Promise<boolean> {
	const response = await fetch(
		`${BASE_PATH}/todoitems/${todoItems.todoListId}`,
		{
			method: "PUT",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(todoItems),
		}
	);

	const data: JSON = await response.json();

	if (response.ok) {
		console.log(data);

		return true;
	}
	return false;
}

export async function updateTask(task: TodoTask): Promise<boolean> {
	const response = await fetch(`${BASE_PATH}/tasks/${task.todoListId}`, {
		method: "PUT",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(task),
	});

	const data: JSON = await response.json();

	if (response.ok) {
		console.log(data);

		return true;
	}
	return false;
}

export async function updateSubTask(subTask: SubTask): Promise<boolean> {
	const response = await fetch(`${BASE_PATH}/subtasks/${subTask.todoTaskId}`, {
		method: "PUT",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(subTask),
	});

	const data: JSON = await response.json();

	if (response.ok) {
		console.log(data);

		return true;
	}
	return false;
}
