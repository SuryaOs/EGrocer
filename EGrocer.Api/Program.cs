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
    builder.Services.AddCors(options =>
    {
        options.AddDefaultPolicy(builder =>
        {
            builder.AllowAnyOrigin()
                   .AllowAnyMethod()
                   .AllowAnyHeader();
        });
    });
}

var app = builder.Build();
{
    app.UseCors();
    app.AddSwagger();
    app.AddGlobalErrorHandler();
    app.UseHttpsRedirection();
    app.UseStaticFiles();
    app.UseAuthentication();
    app.UseAuthorization();
    app.MapControllers();
    app.Run();
}
