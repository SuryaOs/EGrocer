using System.Text;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.IdentityModel.Tokens;

namespace EGrocer.Api.Extensions;

public static class AuthenticationExtension
{
    public static IServiceCollection ConfigureAuthentication(this IServiceCollection services, ConfigurationManager configuration)
    {
        services
            .AddAuthentication(ConfigureAuthenticationOptions)
            .AddJwtBearer(options => ConfigureJwtBearerOptions(options, configuration));

        return services;
    }
    private static void ConfigureAuthenticationOptions(AuthenticationOptions options)
    {
        options.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
        options.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
    }
    private static void ConfigureJwtBearerOptions(JwtBearerOptions options, ConfigurationManager configuration)
    {
        options.TokenValidationParameters = new TokenValidationParameters
        {
            ValidateIssuerSigningKey = true,
            IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(configuration.GetSection("JwtSettings:Secret").Value)),

            ValidateIssuer = true,
            ValidIssuer = configuration.GetSection("JwtSettings:Issuer").Value,

            ValidateAudience = true,
            ValidAudience = configuration.GetSection("JwtSettings:Audience").Value,

            RequireExpirationTime = true
        };
    }
}