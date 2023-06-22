using EGrocer.Core.Common.Repository;
using Microsoft.EntityFrameworkCore.Storage;

namespace EGrocer.Infrastructure.Common.Repository;

public class UnitOfWorkTransaction : IUnitOfWorkTransaction
{
    private readonly IDbContextTransaction _dbContextTransaction;

    public UnitOfWorkTransaction(IDbContextTransaction dbContextTransaction)
    {
        _dbContextTransaction = dbContextTransaction;
    }

    public Task CommitAsync()
    {
        return _dbContextTransaction.CommitAsync();
    }

    public Task RollbackAsync()
    {
        return _dbContextTransaction.RollbackAsync();
    }

    public void Dispose()
    {
        _dbContextTransaction.Dispose();
    }
}
