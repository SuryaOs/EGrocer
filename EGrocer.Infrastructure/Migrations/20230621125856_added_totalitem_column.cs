using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace EGrocer.Infrastructure.Migrations
{
    /// <inheritdoc />
    public partial class added_totalitem_column : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "TotalItem",
                table: "Orders",
                type: "int",
                nullable: false,
                defaultValue: 0);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "TotalItem",
                table: "Orders");
        }
    }
}
