﻿using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Configuration;
using EGrocer.Core.Common;
using EGrocer.Infrastructure.Repositories.Common;
using EGrocer.Infrastructure.Common.Authentication;
using EGrocer.Core.Common.Authentication;

namespace EGrocer.Infrastructure;

public static class DependencyInjection
{
    public static IServiceCollection AddInfrastructure(this IServiceCollection services, ConfigurationManager configuration)
    {
        services
            .AddDbContext<GrocerDbContext>(options => options.UseSqlServer(configuration.GetConnectionString("GrocerConnection")))
            .Configure<JwtSettings>(configuration.GetSection(JwtSettings.SectionName))
            .BuildServiceProvider().GetService<GrocerDbContext>().Database.Migrate();

        Console.WriteLine("Connection string is " + configuration.GetConnectionString("GrocerConnection"));

         services
            .AddScoped<IUnitOfWork, UnitOfWork>()
            .AddScoped<IJwtTokenGenerator, JwtTokenGenerator>();

        return services;
    }
}
