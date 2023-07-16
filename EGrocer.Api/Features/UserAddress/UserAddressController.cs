using EGrocer.Api.Exceptions;
using EGrocer.Business.UserAddresses;
using Microsoft.AspNetCore.Mvc;

namespace EGrocer.Api.Features.UserAddress;

[Route("address")]
[ApiController]
public class UserAddressController : ControllerBase
{
    private readonly IUserAddressService _userAddressService;

    public UserAddressController(IUserAddressService userAddressService)
    {
        _userAddressService = userAddressService;
    }
    [HttpGet("getByUser/{userId}")]
    public async Task<IActionResult> Get(string userId)
    {
        var address = await _userAddressService.Get(userId);
        return Ok(address);
    }
    [HttpPost]
    public async Task<IActionResult> Add(AddUserAddressRequest userAddressRequest)
    {
        return Ok(await _userAddressService.Add(userAddressRequest));
    }
    [HttpPut]
    public async Task<IActionResult> Update(UpdateUserAddressRequest userAddressRequest)
    {
        var isUpdated = await _userAddressService.Update(userAddressRequest) ??
                       throw new NotFoundException("User Address not found");

        return Ok(isUpdated);
    }
    [HttpDelete("{addressId:int}")]
    public async Task<IActionResult> Delete(int addressId)
    {
        var isDeleted = await _userAddressService.Delete(addressId) ??
                        throw new NotFoundException("User Address not found");

        return Ok(isDeleted);
    }

}