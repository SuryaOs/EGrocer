using EGrocer.Api.Exceptions;
using Microsoft.AspNetCore.Mvc;
using EGrocer.Business.Authentication;

namespace EGrocer.Api.Features.Authentication;

[ApiController]
[Route("auth")]
public class AuthController : ControllerBase
{
    private readonly IAuthenticationService _authService;

    public AuthController(IAuthenticationService authService)
    {
        _authService = authService;
    }

    [HttpPost("register")]
    public async Task<IActionResult> Register([FromBody] RegisterRequest userRequest)
    {
        if (!ModelState.IsValid)
            throw new BadRequestException("Invalid Register request");

        var registered = await _authService.Register(userRequest);
        if (!registered)
            throw new BadRequestException("User registration failed");

        return Ok(registered);
    }

    [HttpPost("login")]
    public async Task<IActionResult> Login([FromBody] LoginRequest userRequest)
    {
        if (!ModelState.IsValid)
            throw new BadRequestException("Invalid Login request");

        var login = await _authService.Login(userRequest);
        if (!login)
            return Unauthorized(userRequest);

        return Ok();
    }
}
