using EGrocer.Core.Categories;
using EGrocer.Core.Common;
using EGrocer.Core.Products;
using EGrocer.Infrastructure.Repositories.Categories;
using EGrocer.Infrastructure.Repositories.Products;

namespace EGrocer.Infrastructure.Repositories.Common;

public class UnitOfWork : IUnitOfWork
{
    private readonly GrocerDbContext _context;
    public IProductRepository Product { get; private set; }
    public ICategoryRepository Category { get; private set; }

    public UnitOfWork(GrocerDbContext context)
    {
        _context = context;
        Product = new ProductRepository(_context);
        Category = new CategoryRepository(_context);
    } 

    public int Save()
    {
      return _context.SaveChanges();
    }

    public void Dispose()
    {
        Dispose(true);
        GC.SuppressFinalize(this);
    }
    protected virtual void Dispose(bool disposing) 
    {
        if (disposing && _context != null)
        {
             _context.Dispose();
        }
    }

}
