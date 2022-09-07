import BASE_PATH from "./getRequests";

export async function addTodoList(todoItems: object): Promise<boolean> {
	const response = await fetch(`${BASE_PATH}/todoitems`, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(todoItems),
	});

	const data: JSON = await response.json();

	if (response.ok) {
		console.log(data);

		return true;
	}
	return false;
}

export async function addTask(task: object): Promise<boolean> {
	const response = await fetch(`${BASE_PATH}/tasks`, {
		method: "POST",
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

export async function addSubTask(subTask: object): Promise<boolean> {
	const response = await fetch(`${BASE_PATH}/subtasks`, {
		method: "POST",
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

export const TEST_TODO: object = {
	todoListName: "Test Todo List",
	todoListDesc: "Test Todo List Description",
	todoListDeleted: false,
};

export const TEST_TASK: object = {
	todoTaskId: 0,
	taskName: "Test Task",
	taskDesc: "Test Task Description",
	taskComplete: false,
	taskDeleted: false,
	taskDeadline: "2022-09-06T12:12:52.772Z",
	taskCompletionTime: "2022-09-06T12:12:52.772Z",
	todoListId: 40,
};

export const TEST_SUBTASK: object = {
	subTaskId: 0,
	subName: "Test Subtask",
	subDesc: "Test Subtask Description",
	subComplete: false,
	subDeleted: false,
	subDeadline: "2022-09-06T12:12:52.772Z",
	subCompletionTime: "2022-09-06T12:12:52.772Z",
	todoTaskId: 0,
};
