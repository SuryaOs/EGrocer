using EGrocer.Core.Common;
using Microsoft.EntityFrameworkCore;
using System.Linq.Expressions;

namespace EGrocer.Infrastructure.Repositories.Common;

public class GenericRepository<T> : IGenericRepository<T> where T : class
{
    private readonly GrocerDbContext _dbContext;
    private readonly DbSet<T> _dbSet;

    public GenericRepository(GrocerDbContext dbContext)
    {
        _dbContext = dbContext ?? throw new ArgumentNullException(nameof(dbContext));
        _dbSet = _dbContext.Set<T>();

    }
    public async Task AddAsync(T entity) => await _dbSet.AddAsync(entity);

    public async Task AddRangeAsync(IEnumerable<T> entities) => await _dbSet.AddRangeAsync(entities);

    public void Delete(T entity) => _dbSet.Remove(entity);

    public void DeleteRange(IEnumerable<T> entities) => _dbSet.RemoveRange(entities);

    public async Task<T?> GetAsync(Expression<Func<T, bool>> expression) => await _dbSet.AsNoTracking().FirstOrDefaultAsync(expression);

    public async Task<IEnumerable<T>> GetAllByCondition(Expression<Func<T, bool>> expression) => await _dbSet.AsNoTracking().Where(expression).ToListAsync();

    public async Task<IEnumerable<T>> GetAllAsync() => await _dbSet.AsNoTracking().ToListAsync();

    public async Task<T?> GetByIdAsync(int id) => await _dbSet.FindAsync(id);

    public void Update(T entity) => _dbSet.Update(entity);

    public void UpdateRange(IEnumerable<T> entities) => _dbSet.UpdateRange(entities);

}
