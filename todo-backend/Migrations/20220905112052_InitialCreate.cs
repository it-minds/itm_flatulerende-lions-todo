using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace todo_backend.Migrations
{
    public partial class InitialCreate : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Lists",
                columns: table => new
                {
                    ListsId = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    ListsName = table.Column<string>(type: "TEXT", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Lists", x => x.ListsId);
                });

            migrationBuilder.CreateTable(
                name: "TodoList",
                columns: table => new
                {
                    TodoListId = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    TodoListName = table.Column<string>(type: "TEXT", nullable: false),
                    TodoListDesc = table.Column<string>(type: "TEXT", nullable: false),
                    TodoListDeleted = table.Column<bool>(type: "INTEGER", nullable: false),
                    ListsId = table.Column<int>(type: "INTEGER", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_TodoList", x => x.TodoListId);
                    table.ForeignKey(
                        name: "FK_TodoList_Lists_ListsId",
                        column: x => x.ListsId,
                        principalTable: "Lists",
                        principalColumn: "ListsId",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "TodoTask",
                columns: table => new
                {
                    TodoTaskId = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    TaskName = table.Column<string>(type: "TEXT", nullable: false),
                    TaskDesc = table.Column<string>(type: "TEXT", nullable: false),
                    TaskComplete = table.Column<bool>(type: "INTEGER", nullable: false),
                    TaskDeleted = table.Column<bool>(type: "INTEGER", nullable: false),
                    TaskDeadline = table.Column<DateTime>(type: "TEXT", nullable: false),
                    CompletionTime = table.Column<DateTime>(type: "TEXT", nullable: false),
                    TodoListId = table.Column<int>(type: "INTEGER", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_TodoTask", x => x.TodoTaskId);
                    table.ForeignKey(
                        name: "FK_TodoTask_TodoList_TodoListId",
                        column: x => x.TodoListId,
                        principalTable: "TodoList",
                        principalColumn: "TodoListId",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "SubTask",
                columns: table => new
                {
                    SubTaskId = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    SubName = table.Column<string>(type: "TEXT", nullable: false),
                    SubDesc = table.Column<string>(type: "TEXT", nullable: false),
                    SubComplete = table.Column<bool>(type: "INTEGER", nullable: false),
                    SubDeleted = table.Column<bool>(type: "INTEGER", nullable: false),
                    SubDeadline = table.Column<DateTime>(type: "TEXT", nullable: false),
                    SubCompletionTime = table.Column<DateTime>(type: "TEXT", nullable: false),
                    TaskId = table.Column<int>(type: "INTEGER", nullable: false),
                    TodoTaskId = table.Column<int>(type: "INTEGER", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_SubTask", x => x.SubTaskId);
                    table.ForeignKey(
                        name: "FK_SubTask_TodoTask_TodoTaskId",
                        column: x => x.TodoTaskId,
                        principalTable: "TodoTask",
                        principalColumn: "TodoTaskId",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_SubTask_TodoTaskId",
                table: "SubTask",
                column: "TodoTaskId");

            migrationBuilder.CreateIndex(
                name: "IX_TodoList_ListsId",
                table: "TodoList",
                column: "ListsId");

            migrationBuilder.CreateIndex(
                name: "IX_TodoTask_TodoListId",
                table: "TodoTask",
                column: "TodoListId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "SubTask");

            migrationBuilder.DropTable(
                name: "TodoTask");

            migrationBuilder.DropTable(
                name: "TodoList");

            migrationBuilder.DropTable(
                name: "Lists");
        }
    }
}
