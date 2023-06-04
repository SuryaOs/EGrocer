using EGrocer.Core.Categories;
using EGrocer.Core.Products;
using Microsoft.EntityFrameworkCore;

namespace EGrocer.Infrastructure;

public class GrocerDbContext : DbContext
{
    public GrocerDbContext(DbContextOptions<GrocerDbContext> options) : base(options)
    {
    }
    public DbSet<Product> Products { get; set; }
    public DbSet<Category> Categories { get; set; }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        //Seeding data to test relations - optional
                modelBuilder.Entity<Category>().HasData(
            new Category { Id = 1, Name = "Beverages", Description = "Beverage you for quick energy" },
            new Category { Id = 2, Name = "Fruits and Vegetables", Description = "Fruits and Veggies" },
            new Category { Id = 3, Name = "Breakfasts and Cereals", Description = "Breakfas and Cereals in 5 Minutes" }
            );

        modelBuilder.Entity<Product>().HasData(
            new Product { Id = 1, Name = "Beverages One", Description = "Beverages one is super healthy drink", Price = 50, CategoryId = 1 },
            new Product { Id = 2, Name = "Apple", Description = "Apple a day, keeps doctor away", Price = 30, CategoryId = 2 },
            new Product { Id = 3, Name = "Oats", Description = "Oats are quickwin for breakfast", Price = 25, CategoryId = 3 },
            new Product { Id = 4, Name = "Kiwi", Description = "Eat Kiwi, Fly Kiwi", Price = 30, CategoryId = 2 }
            );
    }
}
