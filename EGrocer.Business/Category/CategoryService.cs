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

   public async Task<IEnumerable<Category>> GetAll()
    {
        var categories = await _unitOfWork.Category.GetAllAsync();
        return categories ?? Enumerable.Empty<Category>();
    }
    public async Task<bool> Create(CategoryRequest categoryRequest)
    {
        Category category = new()
        {
            Name = categoryRequest.Name,
            Description = categoryRequest.Description,
        };

        await _unitOfWork.Category.AddAsync(category);
        var rowsAdded = _unitOfWork.Save();

        return rowsAdded > 0;
    }
    public async Task<bool?> Update(int categoryId, CategoryRequest categoryRequest)
    {
        var category = await _unitOfWork.Category.GetByIdAsync(categoryId);
        if (category == null)
            return null;

        category.Name = categoryRequest.Name;
        category.Description = categoryRequest.Description;

        _unitOfWork.Category.Update(category);
        var rowsUpdated = _unitOfWork.Save();

        return rowsUpdated > 0;
    }
    public async Task<bool?> Delete(int categoryId)
    {
        var categoryDetails = await _unitOfWork.Category.GetByIdAsync(categoryId);
        if(categoryDetails == null)
            return null;

            _unitOfWork.Category.Delete(categoryDetails);
            var rowsDeleted = _unitOfWork.Save();
            return rowsDeleted > 0;
    }
}
