using EGrocer.Core.Orders;
using EGrocer.Infrastructure.Repositories.Common;

namespace EGrocer.Infrastructure.Orders;
public class OrderRepository : GenericRepository<Order>, IOrderRepository
{
    public OrderRepository(GrocerDbContext dbContext) : base(dbContext)
    {
    }
}