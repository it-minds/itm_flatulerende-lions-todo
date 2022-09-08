export type TaskModel = {
    todoTaskId: number;
    taskName: string;
    taskDesc: string;
    taskComplete: boolean;
    taskDeleted: boolean;
    taskDeadline: Date;
    taskCompletionTime: Date;
    todoListId: number;
}