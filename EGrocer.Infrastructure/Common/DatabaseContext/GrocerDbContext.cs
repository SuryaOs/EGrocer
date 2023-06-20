using EGrocer.Core.Categories;
using EGrocer.Core.Common.Entities;
using EGrocer.Core.Orders;
using EGrocer.Core.Products;
using EGrocer.Core.Users;
using EGrocer.Infrastructure.DataSeeding;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace EGrocer.Infrastructure;

public class GrocerDbContext : IdentityDbContext<User>
{
    public GrocerDbContext(DbContextOptions<GrocerDbContext> options) : base(options)
    {
    }
    public DbSet<Product> Products { get; set; }
    public DbSet<Category> Categories { get; set; }
    public DbSet<Order> Orders{ get; set; }
    public DbSet<OrderDetails> OrderDetails{ get; set; }
    public DbSet<UserAddress> UserAddresses { get; set; }


    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        //allow to extend base behavior of db context
        base.OnModelCreating(modelBuilder);

        DataSeeder.SeedData(modelBuilder);

    }
}
