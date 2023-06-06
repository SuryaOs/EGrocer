using EGrocer.Core.Categories;

namespace EGrocer.Business.Categories;

public interface ICategoryService
{
    Task<IEnumerable<Category>> GetAll();
    Task<bool> Create(Category category);

}
