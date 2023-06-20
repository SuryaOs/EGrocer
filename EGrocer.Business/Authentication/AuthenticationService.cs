using EGrocer.Core.Users;
using Microsoft.AspNetCore.Identity;

namespace EGrocer.Business.Authentication;

public class AuthenticationService : IAuthenticationService
{
    private readonly UserManager<User> _userManager;
    private readonly SignInManager<User> _signInManager;

    public AuthenticationService(UserManager<User> userManager, SignInManager<User> signInManager)
    {
        _userManager = userManager;
        _signInManager = signInManager;
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
    //     var identityUser = await _userManager.FindByEmailAsync(userRequest.Email);
    //     if(identityUser is null)
    //     return null;

    //    return await _userManager.CheckPasswordAsync(identityUser, userRequest.Password);
       var result = await _signInManager.PasswordSignInAsync(userRequest.Email, userRequest.Password, false, false);
       return result.Succeeded;
    }
}