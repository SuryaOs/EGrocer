using EGrocer.Infrastructure;
using EGrocer.Infrastructure.Common.Authentication;
using Microsoft.AspNetCore.Identity;

namespace EGrocer.Api.Extensions;

public static class IdentityExtension
{
  public static IServiceCollection ConfigureIdentity(this IServiceCollection services)
  {
    services.AddAuthentication();

    var builder = services.AddIdentityCore<User>(x => x
      .User
      .RequireUniqueEmail = true);

    builder = new IdentityBuilder(
      builder.UserType,
      typeof(IdentityRole),
      services);

    builder.AddEntityFrameworkStores<GrocerDbContext>().AddDefaultTokenProviders();

    return services;
  }
}