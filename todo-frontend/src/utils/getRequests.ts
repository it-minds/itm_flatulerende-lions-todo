const BASE_PATH = "https://localhost:7277";
export default BASE_PATH;

//* SEED DB
export async function seedDB() {
	const response = await fetch(`${BASE_PATH}/seedLists`);

	const data: JSON = await response.json();

	if (response.ok) {
		return data;
	}

	return false;
}

//* GET REQUESTS

export async function getTodos() {
	const response = await fetch(`${BASE_PATH}/todoitems`);

	const data: JSON = await response.json();

	if (response.ok) {
		return data;
	}

	return false;
}

export async function getTodo(id: number) {
	const response: Response = await fetch(`${BASE_PATH}/todoitems/${id}`);

	const data: JSON = await response.json();

	if (response.ok) {
		return data;
	}
	return false;
}

export async function getTasks() {
	const response: Response = await fetch(`${BASE_PATH}/tasks/`);

	const data: JSON = await response.json();

	if (response.ok) {
		console.log(data);

		return data;
	}
	return false;
}

export async function getTodoTasks(todoId: number) {
	const response: Response = await fetch(`${BASE_PATH}/tasks/${todoId}`);

	const data: JSON = await response.json();

	if (response.ok) {
		console.log(data);

		return data;
	}
	return false;
}

export async function getAllSubTasks() {
	const response: Response = await fetch(`${BASE_PATH}/subtasks`);

	const data: JSON = await response.json();

	if (response.ok) {
		console.log(data);

		return data;
	}
	return false;
}

export async function getSubTasks(taskId: number) {
	const response: Response = await fetch(`${BASE_PATH}/subtasks/${taskId}`);

	const data: JSON = await response.json();

	console.log("data", data);

	if (response.ok) {
		console.log(data);

		return data;
	}
	return false;
}
