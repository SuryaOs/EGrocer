using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Configuration;
using EGrocer.Core.Common;
using EGrocer.Infrastructure.Repositories.Common;

namespace EGrocer.Infrastructure;

public static class DependencyInjection
{
    public static IServiceCollection AddInfrastructure(this IServiceCollection services, ConfigurationManager configuration)
    {
        services
            .AddDbContext<GrocerDbContext>(options => options.UseSqlServer(configuration.GetConnectionString("GrocerConnection")))

            .AddScoped<IUnitOfWork, UnitOfWork>();

        return services;
    }
}
