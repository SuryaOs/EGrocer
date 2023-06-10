namespace EGrocer.Business.Authentication;

public class LoginRequest
{
    public required string Email { get; set; }
    public required string Password { get; set; }
}
public class RegisterRequest: LoginRequest
{
    public string FirstName { get; set; } = null!;
    public string LastName { get; set;} = null!;
    public required string PhoneNumber { get; set; }
}