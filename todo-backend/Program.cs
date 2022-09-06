using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Reflection.Metadata;
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

//Create
//Console.WriteLine("Laver liste 1");
//db.Add(new TodoList { TodoListName = "Liste1", TodoListDesc = "Bare lige en tester nummer 1", TodoListDeleted = false });
//db.SaveChanges();

//Console.WriteLine("Laver liste 1");
//db.Add(new TodoList { TodoListName = "Liste2", TodoListDesc = "Bare lige en tester nummer 2", TodoListDeleted = false });
//db.SaveChanges();

// Read


//var summaries = new[]
//{
//    "Freezing", "Bracing", "Chilly", "Cool", "Mild", "Warm", "Balmy", "Hot", "Sweltering", "Scorching"
//};

//app.MapGet("/weatherforecast", () =>
//{
//    var forecast =  Enumerable.Range(1, 5).Select(index =>
//        new WeatherForecast
//        (
//            DateTime.Now.AddDays(index),
//            Random.Shared.Next(-20, 55),
//            summaries[Random.Shared.Next(summaries.Length)]
//        ))
//        .ToArray();
//    return forecast;
//})
//.WithName("GetWeatherForecast");

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
 * Delete todo-list
 * Delete task
 * Delete subtask
 * 
 * Eventuelt validering (Model validation - se docs)
 */

app.Run();

record WeatherForecast(DateTime Date, int TemperatureC, string? Summary)
{
    public int TemperatureF => 32 + (int)(TemperatureC / 0.5556);
}