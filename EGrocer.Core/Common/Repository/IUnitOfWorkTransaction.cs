namespace EGrocer.Core.Common.Repository;

public interface IUnitOfWorkTransaction : IDisposable
{
    Task CommitAsync();
    Task RollbackAsync();
}