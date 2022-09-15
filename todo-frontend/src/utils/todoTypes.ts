export type SubTask = {
	subTaskId: number;
	subName: string;
	subDesc: string;
	subComplete: boolean;
	subDeleted: boolean;
	subDeadline?: Date | string | null;
	subCompletionTime?: Date | string | null;
	todoTaskId: number;
};

export type TodoTask = {
	todoTaskId: number;
	taskName: string;
	taskDesc: string;
	taskComplete: boolean;
	taskDeleted: boolean;
	taskDeadline: Date | string | null;
	taskCompletionTime: Date | string | null;
	todoListId: number;
	subTasks: SubTask[] | null;
};

export type TodoList = {
	todoListId: number;
	todoListName: string;
	todoListDesc: string;
	todoListDeleted: boolean;
	todoTasks: TodoTask[] | null;
};
