using EGrocer.Core.Common;
using EGrocer.Core.Users;

namespace EGrocer.Business.UserAddresses;

public class UserAddressService : IUserAddressService
{
    private readonly IUnitOfWork _unitOfWork;

    public UserAddressService(IUnitOfWork unitOfWork)
    {
        _unitOfWork = unitOfWork;
    }

    public async Task<UserAddress> Add(AddUserAddressRequest request)
    {
        var address = new UserAddress
        {
            City = request.City,
            State = request.State,
            Address1 = request.Address1,
            Address2 = request.Address2,
            ZipCode = request.ZipCode,
            MobileNumber = request.MobileNumber,
            IsDefault = request.IsDefault,
            UserId = request.UserId,
        };

        await _unitOfWork.UserAddress.AddAsync(address);
        await _unitOfWork.Save();

        return address;
    }

    public async Task<bool?> Delete(int addressId)
    {
        var address = await _unitOfWork.UserAddress.GetByIdAsync(addressId);

        if (address == null)
            return null;

        _unitOfWork.UserAddress.Delete(address);

        return await _unitOfWork.Save() > 0;
    }

    public async Task<IEnumerable<UserAddress?>> Get(string userId)
    {
        var address = await _unitOfWork.UserAddress.GetAllByCondition(x => x.UserId == userId);
        return address;
    }

    public async Task<UserAddress?> Update(UpdateUserAddressRequest request)
    {
        var address = await _unitOfWork.UserAddress.GetByIdAsync(request.Id);

        if (address != null)
        {
            address.City = request.City;
            address.State = request.State;
            address.ZipCode = request.ZipCode;
            address.Address1 = request.Address1;
            address.Address2 = request.Address2;
            address.IsDefault = request.IsDefault;
            address.MobileNumber = request.MobileNumber;
            await _unitOfWork.Save();
        }

        return address;
    }
}