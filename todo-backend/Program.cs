using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Formatters;
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

app.MapGet("/seedLists", () =>
{
    SeedLists.SeedTodoLists(db);
});

app.MapGet("/todoitems", async () =>
    await db.TodoList.ToListAsync());

app.MapGet("/todoitems/{id}", async (int todoId) =>
await db.TodoList.FindAsync(todoId) 
is TodoList todoList 
? Results.Ok(todoList) 
: Results.NotFound());

app.MapGet("/tasks", async () =>
    await db.TodoTask.ToListAsync());

app.MapGet("/tasks/{todoId}", async (int todoId) =>
{
    var tasks = await db.TodoTask
        .Where(t => t.TodoListId == todoId)
        .ToListAsync();

    if (tasks.Count < 1)
    {
        return Results.NotFound();
    }
    return Results.Ok(tasks);
});

app.MapGet("/subtasks", async () =>
    await db.SubTask.ToListAsync());

app.MapGet("/subtasks/{taskId}", async (int taskId) =>
{
    var subtasks = await db.SubTask
        .Where(t => t.TodoTaskId == taskId)
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

// Skal blot modtage et TodoListId og ikke et helt object
app.MapPost("/tasks", async (TodoTask task) =>
{
    db.TodoTask.Add(task);
    await db.SaveChangesAsync();

    return Results.Created($"/todoitems/{task.TodoTaskId}", task);

});

// Skal blot modtage et TodoTaskId og ikke et helt object
app.MapPost("/subtasks", async (SubTask subtask) =>
{
    db.SubTask.Add(subtask);
    await db.SaveChangesAsync();

    return Results.Created($"/todoitems/{subtask.SubTaskId}", subtask);
});

app.MapPut("/todoitems/{id}", async (TodoList inputTodoList) =>
{
	var todoList = await db.TodoList.FindAsync(inputTodoList.TodoListId);

	if (todoList is null)
	{
		return Results.NotFound();
	}

	todoList.TodoListName = inputTodoList.TodoListName;
	todoList.TodoListDesc = inputTodoList.TodoListDesc;
	todoList.TodoListDeleted = inputTodoList.TodoListDeleted;

    await db.SaveChangesAsync();

	return Results.NoContent();
});

app.MapPut("/tasks/{id}", async (TodoTask inputTask) =>
{
    var task = await db.TodoTask.FindAsync(inputTask.TodoTaskId);

    if (task is null)
    {
        return Results.NotFound();
    }

    task.TaskName = inputTask.TaskName;
    task.TaskDesc = inputTask.TaskDesc;
    task.TaskComplete = inputTask.TaskComplete;
    task.TaskDeleted = inputTask.TaskDeleted;
    task.TaskDeadline = inputTask.TaskDeadline;
    task.TaskCompletionTime = inputTask.TaskCompletionTime;

    await db.SaveChangesAsync();

    return Results.NoContent();
});

app.MapPut("/subtasks/{id}", async (SubTask inputSubtask) =>
{
    var subtask = await db.SubTask.FindAsync(inputSubtask.SubTaskId);

    if (subtask is null)
    {
        return Results.NotFound();
    }

    subtask.SubName = inputSubtask.SubName;
    subtask.SubDesc = inputSubtask.SubDesc;
    subtask.SubComplete = inputSubtask.SubComplete;
    subtask.SubDeleted = inputSubtask.SubDeleted;
    subtask.SubDeadline = inputSubtask.SubDeadline;
    subtask.SubCompletionTime = inputSubtask.SubCompletionTime;

    await db.SaveChangesAsync();

    return Results.NoContent();
});



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

/*
 * Eventuelt validering (Model validation - se docs)
 * Det var nok en god ide at bruge DTO til tasks og subtasks
 * Eventuelt antal af tasks på de forskellige todolister og antal subtasks for en task i database-modellen
 * Tjek op på cascade-delete om det er nemmere end den måde der deletes på nu
 */