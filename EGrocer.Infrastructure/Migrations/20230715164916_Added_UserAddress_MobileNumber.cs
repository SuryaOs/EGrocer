using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace EGrocer.Infrastructure.Migrations
{
    /// <inheritdoc />
    public partial class Added_UserAddress_MobileNumber : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "8ed004c1-f045-4c2c-820d-df515c88cbb9");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "e840249f-f020-404f-a2fa-cce7c6ee4bf2");

            migrationBuilder.AddColumn<string>(
                name: "MobileNumber",
                table: "UserAddresses",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[,]
                {
                    { "0b5b8dbc-8d58-4449-80eb-a833b92ad10f", null, "Administrator", "ADMINISTRATOR" },
                    { "553bd7e4-42d5-4e01-9936-6edaa39bfc0c", null, "Viewer", "VIEWER" }
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "0b5b8dbc-8d58-4449-80eb-a833b92ad10f");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "553bd7e4-42d5-4e01-9936-6edaa39bfc0c");

            migrationBuilder.DropColumn(
                name: "MobileNumber",
                table: "UserAddresses");

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[,]
                {
                    { "8ed004c1-f045-4c2c-820d-df515c88cbb9", null, "Administrator", "ADMINISTRATOR" },
                    { "e840249f-f020-404f-a2fa-cce7c6ee4bf2", null, "Viewer", "VIEWER" }
                });
        }
    }
}
