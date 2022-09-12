export interface SubTaskModel {
  subTaskId: number;
  subName: string;
  subDesc: string;
  subComplete: boolean;
  subDeleted: boolean;
  subDeadline?: Date | string | null;
  subCompletionTime?: Date | string | null;
  todoTaskId: number;
}

export interface TaskModel {
  todoTaskId: number;
  taskName: string;
  taskDesc: string;
  taskComplete: boolean;
  taskDeleted: boolean;
  taskDeadline: Date | string | null;
  taskCompletionTime: Date | string | null;
  todoListId: number;
  subTasks: SubTaskModel[] | null;
}

export interface TodoModel {
  todoListId: number;
  todoListName: string;
  todoListDesc: string;
  todoListDeleted: boolean;
  todoTasks: TaskModel[] | null;
}
