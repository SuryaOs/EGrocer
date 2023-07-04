using EGrocer.Core.Users;

namespace EGrocer.Core.Common.Authentication;

public interface IJwtTokenGenerator
{
    Task<string> GenerateToken(User user);
}