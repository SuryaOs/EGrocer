using EGrocer.Core.Orders;
using EGrocer.Infrastructure.Repositories.Common;

namespace EGrocer.Infrastructure.Orders;
public class OrderDetailsRepository : GenericRepository<OrderDetails>, IOrderDetailsRepository
{
    public OrderDetailsRepository(GrocerDbContext dbContext) : base(dbContext)
    {
    }
}