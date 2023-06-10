using EGrocer.Infrastructure.Common.Authentication;
using Microsoft.AspNetCore.Identity;

namespace EGrocer.Business.Authentication;

public class AuthenticationService : IAuthenticationService
{
    private readonly UserManager<User> _userManager;
    // private readonly SignInManager<User> _signInManager;

    public AuthenticationService(UserManager<User> userManager)
    {
        _userManager = userManager;
        // _signInManager = signInManager;
    }

    public async Task<bool> Register(RegisterRequest userRequest)
    {
        var user = new User
        {
            UserName = userRequest.Email,
            FirstName = userRequest.FirstName,
            LastName = userRequest.LastName,
            Email = userRequest.Email,
            PhoneNumber = userRequest.PhoneNumber
        };

        var result = await _userManager.CreateAsync(user, userRequest.Password);
        return result.Succeeded;
    }

    public async Task<bool> Login(LoginRequest userRequest)
    {
        // var result = await _signInManager.PasswordSignInAsync(userRequest.Email, userRequest.Password, false, false);
        // return result.Succeeded;
        return false;
    }

}