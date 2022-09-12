using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace todo_backend.Migrations
{
    public partial class KeyNameCorrections : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "TaskId",
                table: "SubTask");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "TaskId",
                table: "SubTask",
                type: "INTEGER",
                nullable: false,
                defaultValue: 0);
        }
    }
}
