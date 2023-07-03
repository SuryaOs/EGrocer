using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace EGrocer.Infrastructure.Migrations
{
    /// <inheritdoc />
    public partial class SeededRoleEntity : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[,]
                {
                    { "8ed004c1-f045-4c2c-820d-df515c88cbb9", null, "Administrator", "ADMINISTRATOR" },
                    { "e840249f-f020-404f-a2fa-cce7c6ee4bf2", null, "Viewer", "VIEWER" }
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "8ed004c1-f045-4c2c-820d-df515c88cbb9");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "e840249f-f020-404f-a2fa-cce7c6ee4bf2");
        }
    }
}
