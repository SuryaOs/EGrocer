using EGrocer.Infrastructure;
using EGrocer.Business;
using EGrocer.Api.ServiceExtensions;
using EGrocer.Api.Extensions;

var builder = WebApplication.CreateBuilder(args);
{
    builder.Services
        .ConfigureIdentity()
        .AddApplication()
        .AddInfrastructure(builder.Configuration)
        .AddBusiness()
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
