namespace EGrocer.Core.Common.Authentication;

public interface IJwtTokenGenerator
{
    string GenerateToken(string Email);
}