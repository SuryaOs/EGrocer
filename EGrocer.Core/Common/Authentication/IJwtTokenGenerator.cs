namespace EGrocer.Core.Common.Authentication;

public interface IJwtTokenGenerator
{
    Task<string> GenerateToken(string Email);
}