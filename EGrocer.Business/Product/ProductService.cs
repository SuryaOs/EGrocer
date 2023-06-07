using EGrocer.Core.Common;
using EGrocer.Core.Products;

namespace EGrocer.Business.Products;

public class ProductService : IProductService
{
    private readonly IUnitOfWork _unitOfWork;

    public ProductService(IUnitOfWork unitOfWork)
    {
        _unitOfWork = unitOfWork ?? throw new ArgumentNullException(nameof(unitOfWork));
    }
    public async Task<IEnumerable<Product>> GetAll()
    {
        var products = await _unitOfWork.Product.GetAllAsync();
        return products ?? Enumerable.Empty<Product>();
    }
    public async Task<IEnumerable<Product>> Get(int categoryId)
    {
        var products = await _unitOfWork.Product.GetAllByCondition(x => x.CategoryId == categoryId);
        return products ?? Enumerable.Empty<Product>();
    }
    public async Task<Product> GetDetails(int productId)
    {
        var product = await _unitOfWork.Product.GetByIdAsync(productId);
        return product;
    }
}
