using EGrocer.Core.Product;
using Microsoft.EntityFrameworkCore;

namespace EGrocer.Infrastructure;

public class GrocerDbContext : DbContext
{
    public GrocerDbContext(DbContextOptions<GrocerDbContext> options) : base(options)
    {
    }
}
