using EGrocer.Core.Products;

namespace EGrocer.Business.Products;

public interface IProductService
{
    Task<IEnumerable<Product>> GetAll();
    Task<IEnumerable<Product>> Get(int categoryId);
    Task<Product> GetDetails(int productId);
}
