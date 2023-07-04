namespace EGrocer.Business.Authentication;

public class LoginResponse
{
    public string Token { get; set; } = string.Empty;
    public bool Result { get; set; }
}
