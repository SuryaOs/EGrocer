using EGrocer.Core.Categories;

namespace EGrocer.Business.Categories;

public interface ICategoryService
{
    Task<IEnumerable<Category>> GetAll();
    Task<bool> Create(CategoryRequest category);
    Task<bool?> Delete(int categoryId);
    Task<bool?> Update(int categoryId, CategoryRequest category);
}
