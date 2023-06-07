using EGrocer.Infrastructure;
using EGrocer.Business;
using EGrocer.Api.ServiceExtensions;

var builder = WebApplication.CreateBuilder(args);
{
    builder.Services
        .AddApplication()
        .AddInfrastructure(builder.Configuration)
        .AddBusiness()
        .AddControllers();
}

var app = builder.Build();
{
    app.AddSwagger();
    app.UseHttpsRedirection();
    app.MapControllers();
    app.Run();
}
