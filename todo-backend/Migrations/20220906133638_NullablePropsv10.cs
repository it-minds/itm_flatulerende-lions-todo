using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace todo_backend.Migrations
{
    public partial class NullablePropsv10 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_SubTask_TodoTask_TodoTaskId",
                table: "SubTask");

            migrationBuilder.DropIndex(
                name: "IX_SubTask_TodoTaskId",
                table: "SubTask");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateIndex(
                name: "IX_SubTask_TodoTaskId",
                table: "SubTask",
                column: "TodoTaskId");

            migrationBuilder.AddForeignKey(
                name: "FK_SubTask_TodoTask_TodoTaskId",
                table: "SubTask",
                column: "TodoTaskId",
                principalTable: "TodoTask",
                principalColumn: "TodoTaskId",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
