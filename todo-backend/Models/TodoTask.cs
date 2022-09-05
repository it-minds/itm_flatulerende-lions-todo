namespace todo_backend.Models
{
    public class TodoTask
    {
        public int TodoTaskId { get; set; }
        public string TaskName { get; set; }
        public string TaskDesc { get; set; }
        public bool TaskComplete { get; set; }
        public bool TaskDeleted { get; set; }
        public DateTime TaskDeadline { get; set; }
        public DateTime CompletionTime { get; set; }

        public int TodoListId { get; set; }
        public TodoList TodoList { get; set; }
    }
}
