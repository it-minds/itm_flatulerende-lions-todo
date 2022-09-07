import BASE_PATH from "./getRequests";
import { SubTask, TodoList, TodoTask } from "./todoTypes";

export async function addTodoList(todoItems: TodoList): Promise<boolean> {
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

export async function addTask(task: TodoTask): Promise<boolean> {
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

export async function addSubTask(subTask: SubTask): Promise<boolean> {
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

export const TEST_TODO: TodoList = {
	todoListId: 1,
	todoListName: "Test Todo List",
	todoListDesc: "Test Todo List Description asodfjæasdf",
	todoListDeleted: false,
	todoTasks: [],
};

export const TEST_TASK: TodoTask = {
	todoTaskId: 1,
	taskName: "Test Task",
	taskDesc: "Test Task Description LSADJHFLASDHFLKASJHDFLKSJ",
	taskComplete: false,
	taskDeleted: false,
	taskDeadline: "2022-09-06T12:12:52.772Z",
	taskCompletionTime: "2022-09-06T12:12:52.772Z",
	todoListId: 1,
	subTasks: [],
};

export const TEST_SUBTASK: SubTask = {
	subTaskId: 1,
	subName: "Test Subtask",
	subDesc: "KOM SÅ MAND!",
	subComplete: false,
	subDeleted: false,
	subDeadline: "2022-09-06T12:12:52.772Z",
	subCompletionTime: "2022-09-06T12:12:52.772Z",
	todoTaskId: 1,
};
