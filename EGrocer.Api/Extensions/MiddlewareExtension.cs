using EGrocer.Api.Middleware;

namespace EGrocer.Api.Extensions;

public static class MiddlewareExtension
{
    public static IServiceCollection ConfigureMiddleware(this IServiceCollection services)
    {
        services
            .AddScoped<ExceptionHandlingMiddleware>();

        return services;
    }
    public static IApplicationBuilder AddGlobalErrorHandler(this IApplicationBuilder app)
    {
        return app.UseMiddleware<ExceptionHandlingMiddleware>();
    }
}