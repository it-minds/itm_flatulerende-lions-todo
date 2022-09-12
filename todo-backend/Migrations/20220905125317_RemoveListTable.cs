using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace todo_backend.Migrations
{
    public partial class RemoveListTable : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_TodoList_Lists_ListsId",
                table: "TodoList");

            migrationBuilder.DropTable(
                name: "Lists");

            migrationBuilder.DropIndex(
                name: "IX_TodoList_ListsId",
                table: "TodoList");

            migrationBuilder.DropColumn(
                name: "ListsId",
                table: "TodoList");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "ListsId",
                table: "TodoList",
                type: "INTEGER",
                nullable: false,
                defaultValue: 0);

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

            migrationBuilder.CreateIndex(
                name: "IX_TodoList_ListsId",
                table: "TodoList",
                column: "ListsId");

            migrationBuilder.AddForeignKey(
                name: "FK_TodoList_Lists_ListsId",
                table: "TodoList",
                column: "ListsId",
                principalTable: "Lists",
                principalColumn: "ListsId",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
