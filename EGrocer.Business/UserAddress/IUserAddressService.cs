using EGrocer.Core.Users;

namespace EGrocer.Business.UserAddresses;

public interface IUserAddressService
{
    Task<IEnumerable<UserAddress?>> Get(int userId);
    Task<UserAddress> Add(AddUserAddressRequest address);
    Task<bool?> Delete(int addressId);
    Task<UserAddress?> Update(UpdateUserAddressRequest product);
}
