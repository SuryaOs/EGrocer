using EGrocer.Core.Products;
using EGrocer.Infrastructure.Repositories.Common;

namespace EGrocer.Infrastructure.Repositories.Products;

public class ProductRepository : GenericRepository<Product>, IProductRepository
{
    public ProductRepository(GrocerDbContext dbContext) : base(dbContext)
    {
    }
}
