using EGrocer.Business.Orders;
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
        return products;
    }
    public async Task<IEnumerable<Product?>> Get(int categoryId)
    {
        var products = await _unitOfWork.Product.GetAllByCondition(x => x.CategoryId == categoryId);
        return products;
    }
    public async Task<Product?> GetDetails(int productId)
    {
        var product = await _unitOfWork.Product.GetByIdAsync(productId);
        return product;
    }
    public async Task<bool> Update(IEnumerable<AddOrderDetailsRequest> request)
    {
        var productsToUpdate = request.Select(x => x.ProductId);
        var products = await _unitOfWork.Product.GetAllByCondition(x => productsToUpdate.Contains(x.Id));
        foreach (var product in products)
        {
            var quantity = request.FirstOrDefault(p => p.ProductId == product.Id)?.Quantity ?? 0;
            product.AvailableQuantity -= quantity;
        }
        _unitOfWork.Product.UpdateRange(products);
        await _unitOfWork.Save();
        return true;
    }
    public async Task<Product> Add(AddProductRequest request)
    {
        var product = new Product
        {
            Name = request.Name,
            Price = request.Price,
            Description = request.Description,
            ImageName = request.ImageName,
            AvailableQuantity = request.AvailableQuantity,
            CategoryId = request.CategoryId,
        };

        await _unitOfWork.Product.AddAsync(product);
        await _unitOfWork.Save();

        return product;
    }

    public async Task<Product?> Update(UpdateProductRequest request)
    {
        var product = await GetDetails(request.Id);

        if (product != null)
        {
            product.Name = request.Name;
            product.Price = request.Price;
            product.Description = request.Description;
            product.ImageName = request.ImageName;
            product.AvailableQuantity = request.Quantity;
            product.CategoryId = request.CategoryId;
             await _unitOfWork.Save();
        }

        return product;
    }

    public async Task<bool?> Delete(int productId)
    {
        var product = await _unitOfWork.Product.GetByIdAsync(productId);

        if (product == null)
            return null;

        _unitOfWork.Product.Delete(product);

        return await _unitOfWork.Save() > 0;
    }

}
