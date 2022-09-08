import BASE_PATH from "./getRequests";
import { SubTask, TodoList, TodoTask } from "./todoTypes";

export async function deleteTodoList(todoId: number): Promise<boolean> {
	const response = await fetch(`${BASE_PATH}/todolists/${todoId}`, {
		method: "DELETE",
	});

	const data: JSON = await response.json();

	if (response.ok) {
		console.log(data);

		return true;
	}
	return false;
}

export async function deleteTask(taskId: number): Promise<boolean> {
	const response = await fetch(`${BASE_PATH}/tasks/${taskId}`, {
		method: "DELETE",
	});

	const data: JSON = await response.json();

	if (response.ok) {
		console.log(data);

		return true;
	}
	return false;
}

export async function deleteSubTask(subId: number): Promise<boolean> {
	const response = await fetch(`${BASE_PATH}/subtasks/${subId}`, {
		method: "DELETE",
	});

	const data: JSON = await response.json();

	if (response.ok) {
		console.log(data);

		return true;
	}
	return false;
}
