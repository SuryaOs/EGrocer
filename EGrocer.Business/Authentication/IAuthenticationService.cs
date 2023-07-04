namespace EGrocer.Business.Authentication;

public interface IAuthenticationService
{
    Task<bool> Register(RegisterRequest userRequest);
    Task<LoginResponse> Login(LoginRequest userRequest);
}