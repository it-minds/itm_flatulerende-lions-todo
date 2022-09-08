export type TaskModel = {
    todoTaskId: number;
    taskName: string;
    taskDesc: string;
    taskComplete: boolean;
    taskDeleted: boolean;
    taskDeadline: Date | string;
    taskCompletionTime: Date | string | null;
    todoListId: number;
}