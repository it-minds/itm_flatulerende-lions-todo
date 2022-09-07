export type SubTask = {
	subTaskId: number;
	subName: string;
	subDesc: string;
	subComplete: boolean;
	subDeleted: boolean;
	subDeadline: string;
	subCompletionTime: string;
	todoTaskId: number;
};

export type TodoTask = {
	todoTaskId: number;
	taskName: string;
	taskDesc: string;
	taskComplete: boolean;
	taskDeleted: boolean;
	taskDeadline: string;
	taskCompletionTime: string;
	todoListId: number;
	subTasks: SubTask[];
};

export type TodoList = {
	todoListId: number;
	todoListName: string;
	todoListDesc: string;
	todoListDeleted: boolean;
	todoTasks: TodoTask[];
};
