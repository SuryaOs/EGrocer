using EGrocer.Core.Users;
using EGrocer.Infrastructure;
using Microsoft.AspNetCore.Identity;

namespace EGrocer.Api.Extensions;

public static class IdentityExtension
{
    public static IServiceCollection ConfigureIdentity(this IServiceCollection services)
    {
        var builder = services
                        .AddIdentity<User, IdentityRole>(ConfigureIdentityOptions)
                        .AddEntityFrameworkStores<GrocerDbContext>()
                        .AddDefaultTokenProviders();
        return services;
    }
    private static void ConfigureIdentityOptions(IdentityOptions options)
    {
        options.User.RequireUniqueEmail = true;

        //password rules
        options.Password.RequiredLength = 10;
    }
}