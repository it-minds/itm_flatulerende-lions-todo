namespace todo_backend.Models
{
    public class SubTask
    {
        public int SubTaskId { get; set; }
        public string SubName { get; set; }
        public string SubDesc { get; set; }
        public bool SubComplete { get; set; }
        public bool SubDeleted { get; set; }
        public DateTime? SubDeadline { get; set; }
        public DateTime? SubCompletionTime { get; set; }

        public int TodoTaskId { get; set; }
        public TodoTask TodoTask { get; set; }
    }
}
