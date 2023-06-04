using EGrocer.Core.Categories;
using EGrocer.Infrastructure.Repositories.Common;

namespace EGrocer.Infrastructure.Repositories.Categories;

public class CategoryRepository : GenericRepository<Category>, ICategoryRepository
{
    public CategoryRepository(GrocerDbContext dbContext) : base(dbContext)
    {
    }
}
