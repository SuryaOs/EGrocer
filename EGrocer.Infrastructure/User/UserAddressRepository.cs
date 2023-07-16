using EGrocer.Core.Users;
using EGrocer.Infrastructure.Repositories.Common;

namespace EGrocer.Infrastructure.Users;

public class UserAddressRepository : GenericRepository<UserAddress>, IUserAddressRepository
{
    public UserAddressRepository(GrocerDbContext dbContext) : base(dbContext)
    {
    }
}