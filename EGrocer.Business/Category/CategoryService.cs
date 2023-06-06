using EGrocer.Core.Categories;
using EGrocer.Core.Common;

namespace EGrocer.Business.Categories;

public class CategoryService : ICategoryService
{
    private readonly IUnitOfWork _unitOfWork;

    public CategoryService(IUnitOfWork unitOfWork)
    {
        _unitOfWork = unitOfWork ?? throw new ArgumentNullException(nameof(unitOfWork));
    }

    public Task<bool> Create(Category category)
    {
        throw new NotImplementedException();
    }

    public async Task<IEnumerable<Category>> GetAll()
    {
        var categories = await _unitOfWork.Category.GetAllAsync();
        return categories ?? Enumerable.Empty<Category>() ;
    }
}
