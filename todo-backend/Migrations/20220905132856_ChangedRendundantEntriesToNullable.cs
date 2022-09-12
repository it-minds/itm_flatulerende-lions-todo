using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace todo_backend.Migrations
{
    public partial class ChangedRendundantEntriesToNullable : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "CompletionTime",
                table: "TodoTask");

            migrationBuilder.AlterColumn<DateTime>(
                name: "TaskDeadline",
                table: "TodoTask",
                type: "TEXT",
                nullable: true,
                oldClrType: typeof(DateTime),
                oldType: "TEXT");

            migrationBuilder.AddColumn<DateTime>(
                name: "TaskCompletionTime",
                table: "TodoTask",
                type: "TEXT",
                nullable: true);

            migrationBuilder.AlterColumn<DateTime>(
                name: "SubDeadline",
                table: "SubTask",
                type: "TEXT",
                nullable: true,
                oldClrType: typeof(DateTime),
                oldType: "TEXT");

            migrationBuilder.AlterColumn<DateTime>(
                name: "SubCompletionTime",
                table: "SubTask",
                type: "TEXT",
                nullable: true,
                oldClrType: typeof(DateTime),
                oldType: "TEXT");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "TaskCompletionTime",
                table: "TodoTask");

            migrationBuilder.AlterColumn<DateTime>(
                name: "TaskDeadline",
                table: "TodoTask",
                type: "TEXT",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified),
                oldClrType: typeof(DateTime),
                oldType: "TEXT",
                oldNullable: true);

            migrationBuilder.AddColumn<DateTime>(
                name: "CompletionTime",
                table: "TodoTask",
                type: "TEXT",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));

            migrationBuilder.AlterColumn<DateTime>(
                name: "SubDeadline",
                table: "SubTask",
                type: "TEXT",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified),
                oldClrType: typeof(DateTime),
                oldType: "TEXT",
                oldNullable: true);

            migrationBuilder.AlterColumn<DateTime>(
                name: "SubCompletionTime",
                table: "SubTask",
                type: "TEXT",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified),
                oldClrType: typeof(DateTime),
                oldType: "TEXT",
                oldNullable: true);
        }
    }
}
