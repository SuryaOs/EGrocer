using EGrocer.Core.Categories;
using EGrocer.Core.Common.Entities;
using EGrocer.Core.Products;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;

namespace EGrocer.Infrastructure.DataSeeding
{
    public static class DataSeeder
    {
        public static void SeedData(ModelBuilder modelBuilder)
        {
            SeedCategories(modelBuilder);
            SeedProducts(modelBuilder);
            SeedStatuses(modelBuilder);
            SeedRoles(modelBuilder);
        }

        private static void SeedCategories(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Category>().HasData(
                new Category { Id = 1, Name = "Beverages", Description = "Beverage for quick energy" },
                new Category { Id = 2, Name = "Fruits and Vegetables", Description = "Fruits and Veggies" },
                new Category { Id = 3, Name = "Breakfasts and Cereals", Description = "Breakfasts and Cereals in 5 Minutes" }
            );
        }

        private static void SeedProducts(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Product>().HasData(
                new Product { Id = 1, Name = "Beverages One", Description = "Super healthy drink", Price = 50, ImageName = "beverageone.jpg", CategoryId = 1 },
                new Product { Id = 2, Name = "Apple", Description = "Apple a day, keeps doctor away", Price = 30, ImageName = "apple.jpg", CategoryId = 2 },
                new Product { Id = 3, Name = "Oats", Description = "Quickwin for breakfast", Price = 25, ImageName = "oats.jpg", CategoryId = 3 },
                new Product { Id = 4, Name = "Kiwi", Description = "Eat Kiwi, Fly Kiwi", Price = 30, ImageName = "kiwi.jpg", CategoryId = 2 }
            );
        }

        private static void SeedStatuses(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Status>().HasData(
                new Status { Id = 1, Name = "Placed" },
                new Status { Id = 2, Name = "Processing" },
                new Status { Id = 3, Name = "Shipped" },
                new Status { Id = 4, Name = "Out for Delivery" },
                new Status { Id = 5, Name = "Delivered" },
                new Status { Id = 6, Name = "Cancelled" }
            );
        }

        private static void SeedRoles(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<IdentityRole>().HasData(
                new IdentityRole { Name = "Viewer", NormalizedName = "VIEWER" },
                new IdentityRole { Name = "Administrator", NormalizedName = "ADMINISTRATOR" }
            );
        }
    }
}
