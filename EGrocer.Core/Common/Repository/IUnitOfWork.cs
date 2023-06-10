using EGrocer.Core.Categories;
using EGrocer.Core.Products;

namespace EGrocer.Core.Common;

public interface IUnitOfWork: IDisposable
{
    IProductRepository Product { get; }
    ICategoryRepository Category { get; }
    int Save();
}
