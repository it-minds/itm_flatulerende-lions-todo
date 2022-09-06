using Microsoft.EntityFrameworkCore;
using System.Collections.ObjectModel;

namespace todo_backend.Models
{
    public class TodoList
    {
        public int TodoListId { get; set; }
        public string TodoListName { get; set; }
        public string TodoListDesc { get; set; }
        public bool TodoListDeleted { get; set; }

        public virtual Collection<TodoTask> TodoTasks { get; set; }
    }
}
