using EGrocer.Infrastructure;
using EGrocer.Business;
using EGrocer.Api.ServiceExtensions;
using EGrocer.Api.Extensions;

var builder = WebApplication.CreateBuilder(args);
{
    builder.Services
        .AddApplication()
        .AddInfrastructure(builder.Configuration)
        .AddBusiness()
        .ConfigureIdentity()
        .AddControllers();
}

var app = builder.Build();
{
    app.AddSwagger();
    app.AddGlobalErrorHandler();
    app.UseHttpsRedirection();
    app.MapControllers();
    app.Run();
}
