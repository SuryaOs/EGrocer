using Microsoft.Extensions.DependencyInjection;
using EGrocer.Business.Categories;
using EGrocer.Business.Products;
using EGrocer.Business.Authentication;
using EGrocer.Business.Upload;
using EGrocer.Business.Orders;
using EGrocer.Business.UserAddresses;

namespace EGrocer.Business;

public static class DependencyInjection
{
    public static IServiceCollection AddBusiness(this IServiceCollection services)
    {
        services
            .AddScoped<ICategoryService, CategoryService>()
            .AddScoped<IProductService, ProductService>()
            .AddScoped<IAuthenticationService, AuthenticationService>()
            .AddScoped<IUploadService, UploadService>()
            .AddScoped<IOrderService, OrderService>()
            .AddScoped<IOrderDetailsService, OrderDetailsService>()
            .AddScoped<IUserAddressService, UserAddressService>();

        return services;
    }
}
