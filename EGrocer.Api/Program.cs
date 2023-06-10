using EGrocer.Infrastructure;
using EGrocer.Business;
using EGrocer.Api.ServiceExtensions;
using EGrocer.Api.Extensions;

var builder = WebApplication.CreateBuilder(args);
{
    builder.Services
        .AddApplication(builder.Configuration)
        .AddInfrastructure(builder.Configuration)
        .AddBusiness()
        .AddControllers();
}

var app = builder.Build();
{
    app.AddSwagger();
    app.AddGlobalErrorHandler();
    app.UseHttpsRedirection();
    app.UseAuthentication();
    app.UseAuthorization();
    app.MapControllers();
    app.Run();
}
