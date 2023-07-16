using EGrocer.Core.Categories;
using EGrocer.Core.Common;
using EGrocer.Core.Common.Repository;
using EGrocer.Core.Orders;
using EGrocer.Core.Products;
using EGrocer.Core.Users;
using EGrocer.Infrastructure.Common.Repository;
using EGrocer.Infrastructure.Orders;
using EGrocer.Infrastructure.Repositories.Categories;
using EGrocer.Infrastructure.Repositories.Products;
using EGrocer.Infrastructure.Users;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Storage;

namespace EGrocer.Infrastructure.Repositories.Common;

public class UnitOfWork : IUnitOfWork
{
    private readonly GrocerDbContext _context;
    private IDbContextTransaction _currentTransaction;
    public IProductRepository Product { get; private set; }
    public ICategoryRepository Category { get; private set; }
    public IOrderRepository Order { get; private set; }
    public IOrderDetailsRepository OrderDetails { get; private set; }
    public IUserAddressRepository UserAddress { get; private set; }

    public UnitOfWork(GrocerDbContext context)
    {
        _context = context;
        Product = new ProductRepository(_context);
        Category = new CategoryRepository(_context);
        Order = new OrderRepository(_context);
        OrderDetails = new OrderDetailsRepository(_context);
        UserAddress = new UserAddressRepository(_context);
    }
    public async Task<IUnitOfWorkTransaction> BeginTransactionAsync()
    {
        if (_currentTransaction != null)
        {
            throw new InvalidOperationException("A transaction is already in progress.");
        }

        _currentTransaction = await _context.Database.BeginTransactionAsync();

        return new UnitOfWorkTransaction(_currentTransaction);
    }

    public Task<int> Save()
    {
        return _context.SaveChangesAsync();
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

    public async Task<int> ExecuteSqlCommandAsync(string sqlCommand)
    {
        return await _context.Database.ExecuteSqlRawAsync(sqlCommand);
    }
}
