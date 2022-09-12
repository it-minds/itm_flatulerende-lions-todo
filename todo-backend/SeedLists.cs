using todo_backend.Models;

namespace todo_backend
{
    public static class SeedLists
    {
        public static void SeedTodoLists(ListContext db)
        {
            // Creating todo-lists
            TodoList liste1 = new TodoList { TodoListName = "Liste1", TodoListDesc = "Det her er liste 1", TodoListDeleted = false };
            TodoList liste2 = new TodoList { TodoListName = "Liste2", TodoListDesc = "Det her er liste 2", TodoListDeleted = false };

            // Seeding Todo-lists
            Console.WriteLine("Laver lister");
            db.Add(liste1);
            db.Add(liste2);
            db.SaveChanges();

            // Creating tasks
            TodoTask task1 = new TodoTask { TodoListId = liste1.TodoListId, TaskName = "Task1", TaskDesc = "Beskrivelse task 1", TaskComplete = false, TaskDeleted = false, TaskDeadline = DateTime.Now.AddDays(4) };
            TodoTask task2 = new TodoTask { TodoListId = liste1.TodoListId, TaskName = "Task2", TaskDesc = "Beskrivelse task 2", TaskComplete = false, TaskDeleted = false, TaskDeadline = DateTime.Now.AddDays(3) };
            TodoTask task3 = new TodoTask { TodoListId = liste1.TodoListId, TaskName = "Task3", TaskDesc = "Beskrivelse task 3", TaskComplete = false, TaskDeleted = false, TaskDeadline = DateTime.Now.AddDays(2) };
            TodoTask task4 = new TodoTask { TodoListId = liste2.TodoListId, TaskName = "Task4", TaskDesc = "Beskrivelse task 4", TaskComplete = false, TaskDeleted = false, TaskDeadline = DateTime.Now.AddDays(7) };
            TodoTask task5 = new TodoTask { TodoListId = liste2.TodoListId, TaskName = "Task5", TaskDesc = "Beskrivelse task 5", TaskComplete = false, TaskDeleted = false, TaskDeadline = DateTime.Now.AddDays(6) };
            TodoTask task6 = new TodoTask { TodoListId = liste2.TodoListId, TaskName = "Task6", TaskDesc = "Beskrivelse task 6", TaskComplete = false, TaskDeleted = false, TaskDeadline = DateTime.Now.AddDays(1) };

            // Seeding tasks
            db.Add(task1);
            db.Add(task2);
            db.Add(task3);
            db.Add(task4);
            db.Add(task5);
            db.Add(task6);
            db.SaveChanges();

            // Creating subtasks
            SubTask subTask1 = new SubTask { TodoTaskId = task1.TodoTaskId, SubName = "SubTask1", SubDesc = "Beskrivelse subtask 1", SubComplete = false, SubDeleted = false};
            SubTask subTask2 = new SubTask { TodoTaskId = task1.TodoTaskId, SubName = "SubTask2", SubDesc = "Beskrivelse subtask 2", SubComplete = true, SubDeleted = false};
            SubTask subTask3 = new SubTask { TodoTaskId = task2.TodoTaskId, SubName = "SubTask3", SubDesc = "Beskrivelse subtask 3", SubComplete = false, SubDeleted = false};
            SubTask subTask4 = new SubTask { TodoTaskId = task2.TodoTaskId, SubName = "SubTask4", SubDesc = "Beskrivelse subtask 4", SubComplete = true, SubDeleted = false};

            // Seeding subtasks
            db.Add(subTask1);
            db.Add(subTask2);
            db.Add(subTask3);
            db.Add(subTask4);
            db.SaveChanges();
        }
    }
}
