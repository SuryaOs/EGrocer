using EGrocer.Api.Extensions;

namespace EGrocer.Api.ServiceExtensions;

public static class DependencyInjection
{
    public static IServiceCollection AddApplication(this IServiceCollection services, ConfigurationManager configuration)
    {
        services
        .ConfigureMiddleware()
        .ConfigureOpenApi()
        .ConfigureIdentity()
        .ConfigureAuthentication(configuration);

        return services;
    }
}
