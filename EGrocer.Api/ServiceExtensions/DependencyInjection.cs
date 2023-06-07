using Microsoft.OpenApi.Models;

namespace EGrocer.Api.ServiceExtensions;

public static class DependencyInjection
{
    public static IServiceCollection AddApplication(this IServiceCollection services)
    {
        services.AddSwaggerGen(c =>
        {
            c.SwaggerDoc("v1", new OpenApiInfo { Title = "My API", Version = "v1" });
        });

        return services;
    }

    public static IApplicationBuilder AddSwagger(this IApplicationBuilder app)
    {
        app.UseSwagger();

        app.UseSwaggerUI(c =>
        {
            c.SwaggerEndpoint("/swagger/v1/swagger.json", "My API V1");
        });

        return app;
    }
}
