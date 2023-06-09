using Microsoft.AspNetCore.Identity;

namespace EGrocer.Core.Users;

public class User: IdentityUser
{
    public string FirstName { get; set; } = null!;
    public string LastName { get; set;} = null!;
}