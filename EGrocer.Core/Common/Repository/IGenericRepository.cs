using System.Linq.Expressions;

namespace EGrocer.Core.Common;

public interface IGenericRepository<T> where T : class
{
    Task<IEnumerable<T>> GetAllAsync();
    Task<T?> GetAsync(Expression<Func<T, bool>> expression);
    Task<IEnumerable<T>> GetAllByCondition(Expression<Func<T, bool>> expression);
    Task<T?> GetByIdAsync(int id);
    Task AddAsync(T entity);
    Task AddRangeAsync(IEnumerable<T> entities);
    void Delete(T entity);
    void DeleteRange(IEnumerable<T> entities);
    void Update(T entity);
    void UpdateRange(IEnumerable<T> entities);
    void ExecuteSqlCommand(string sqlCommand);
}
