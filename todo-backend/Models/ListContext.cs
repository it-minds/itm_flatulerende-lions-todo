using Microsoft.EntityFrameworkCore;

namespace todo_backend.Models
{
    public class ListContext : DbContext
    {
        public string DbPath { get; }

        public DbSet<TodoList> TodoList { get; set; }
        public DbSet<TodoTask> TodoTask { get; set; }
        public DbSet<SubTask> SubTask { get; set; }

        public ListContext()
        {
            var folder = Environment.SpecialFolder.LocalApplicationData;
            var path = Environment.GetFolderPath(folder);
            DbPath = System.IO.Path.Join(path, "todo.db");
        }

        protected override void OnConfiguring(DbContextOptionsBuilder options)
        => options.UseSqlite($"Data Source={DbPath}");

        protected override void OnModelCreating(ModelBuilder modelBuilder)
		{
			modelBuilder.Entity<TodoList>().HasMany(x => x.TodoTasks).WithOne().HasForeignKey(x => x.TodoListId);
			//modelBuilder.Entity<TodoTask>().HasMany(x => x.SubTasks).WithOne().HasForeignKey(x => x.TodoTaskId);
		}
	}
}
