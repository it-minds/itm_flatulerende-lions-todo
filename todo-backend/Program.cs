using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Reflection.Metadata;
using System.Threading.Tasks;
using todo_backend;
using todo_backend.Models;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

// Add data context
using var db = new ListContext();
// Note: This sample requires the database to be created before running.
Console.WriteLine($"Database path: {db.DbPath}.");

app.MapGet("/", () => "Hello Todo-list");

app.MapGet("/seedLists", () =>
{
    SeedLists.SeedTodoLists(db);
});

app.MapGet("/todoitems", async () =>
    await db.TodoList.ToListAsync());

app.MapGet("/todoitems/{id}", async (int id) =>
await db.TodoList.FindAsync(id) is TodoList todoList ? Results.Ok(todoList) : Results.NotFound());

app.MapGet("/tasks", async () =>
    await db.TodoTask.ToListAsync());

app.MapGet("/tasks/{id}", async (int id) =>
{
    var tasks = await db.TodoTask
        .Where(t => t.TodoListId == id)
        .ToListAsync();

    if (tasks.Count < 1)
    {
        return Results.NotFound();
    }
    return Results.Ok(tasks);
});

app.MapGet("/subtasks", async () =>
    await db.SubTask.ToListAsync());

app.MapGet("/subtasks/{id}", async (int id) =>
{
    var subtasks = await db.SubTask
        .Where(t => t.TodoTaskId == id)
        .ToListAsync();

    if (subtasks.Count < 1)
    {
        return Results.NotFound();
    }
    return Results.Ok(subtasks);
});

app.MapPost("/todoitems", async (TodoList todoList) =>
{
    db.TodoList.Add(todoList);
    await db.SaveChangesAsync();

    return Results.Created($"/todoitems/{todoList.TodoListId}", todoList);
});

app.MapPost("/tasks", async (TodoTask task) =>
{
    db.TodoTask.Add(task);
    await db.SaveChangesAsync();

    return Results.Created($"/todoitems/{task.TodoTaskId}", task);

    // Vi kommer til at oprette en ny todolist hver gang vi poster!!
});

app.MapPost("/subtasks", async (SubTask subtask) =>
{
    db.SubTask.Add(subtask);
    await db.SaveChangesAsync();

    return Results.Created($"/todoitems/{subtask.SubTaskId}", subtask);

    // Vi kommer til at oprette en ny task hver gang vi poster!!
});



// List of endpoints
/*
 * Get All todo-lists - Done
 * Get Specific todo-list - Done
 * Get Tasks on a specific todo-list - Done
 * Get Subtasks for a specific task - Done
 * Add todo-list - Done
 * Add task to todo-list - Problematisk
 * Add subtask to task - Problematisk
 * Change todo-list
 * Change task
 * Change subtask 
 * Delete todo-list - Done
 * Delete task - Done
 * Delete subtask - Done
 * 
 * Eventuelt validering (Model validation - se docs)
 */

app.MapDelete("/todolists/{todoId}", async (int todoId) =>
{

	if (await db.TodoList.FindAsync(todoId) is TodoList todoList)
	{
		int taskId = -1;
		db.TodoList.Remove(todoList);

		// Deleting all Tasks on list
		await db.TodoTask.ForEachAsync(t =>
		{
			if (t.TodoListId == todoId) {
				taskId = t.TodoTaskId;
				db.TodoTask.Remove(t);
			};
		});

		// Deleting all subtasks on task
		await db.SubTask.ForEachAsync(st =>
		{
			if (st.TodoTaskId == taskId) db.SubTask.Remove(st);
		});

		await db.SaveChangesAsync();
		return Results.Ok(todoList);
	}
	return Results.NotFound();
});

app.MapDelete("/task/{taskId}", async (int taskId) =>
{

	if (await db.TodoTask.FindAsync(taskId) is TodoTask todoTask)
	{
		db.TodoTask.Remove(todoTask);

		await db.SubTask.ForEachAsync(st =>
		{
			if (st.TodoTaskId == taskId) db.SubTask.Remove(st);
		});
		await db.SaveChangesAsync();

		return Results.Ok(todoTask);
	}
	return Results.NotFound();
});

app.MapDelete("/subtask/{subId}", async (int subId) =>
{
	
	if (await db.SubTask.FindAsync(subId) is SubTask subTask)
	{
		db.SubTask.Remove(subTask);
		await db.SaveChangesAsync();
		return Results.Ok(subTask);
	}
		return Results.NotFound();
});


app.Run();


record WeatherForecast(DateTime Date, int TemperatureC, string? Summary)
{
    public int TemperatureF => 32 + (int)(TemperatureC / 0.5556);
}