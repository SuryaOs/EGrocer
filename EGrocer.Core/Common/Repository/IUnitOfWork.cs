﻿using EGrocer.Core.Categories;
using EGrocer.Core.Common.Repository;
using EGrocer.Core.Orders;
using EGrocer.Core.Products;
using EGrocer.Core.Users;

namespace EGrocer.Core.Common;

public interface IUnitOfWork : IDisposable
{
    IProductRepository Product { get; }
    ICategoryRepository Category { get; }
    IOrderRepository Order { get; }
    IOrderDetailsRepository OrderDetails { get; }
    IUserAddressRepository UserAddress { get; }
    Task<IUnitOfWorkTransaction> BeginTransactionAsync();
    Task<int> ExecuteSqlCommandAsync(string sqlCommand);
    Task<int> Save();
}
