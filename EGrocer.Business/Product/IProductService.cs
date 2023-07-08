using EGrocer.Business.Orders;
using EGrocer.Core.Products;

namespace EGrocer.Business.Products;

public interface IProductService
{
    Task<IEnumerable<Product>> GetAll();
    Task<IEnumerable<Product?>> Get(int categoryId);
    Task<Product?> GetDetails(int productId);
    Task<bool> Update(IEnumerable<AddOrderDetailsRequest> request);
    Task<Product> Add(AddProductRequest product);
    Task<bool?> Delete(int productId);
}
