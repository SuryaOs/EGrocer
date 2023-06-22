using EGrocer.Business.Products;
using EGrocer.Core.Common;
using EGrocer.Core.Orders;

namespace EGrocer.Business.Orders;
public class OrderService : IOrderService
{
    private readonly IUnitOfWork _unitOfWork;
    private readonly IOrderDetailsService _orderDetailsService;
    private readonly IProductService _productService;
    public OrderService(IUnitOfWork unitOfWork, IOrderDetailsService orderDetailsService, IProductService productService)
    {
        _unitOfWork = unitOfWork ?? throw new ArgumentNullException(nameof(unitOfWork));
        _orderDetailsService = orderDetailsService ?? throw new ArgumentNullException(nameof(orderDetailsService));
        _productService = productService ?? throw new ArgumentNullException(nameof(productService));
    }
    public async Task<bool> Create(AddOrderRequest orderRequest)
    {
        using var transaction = await _unitOfWork.BeginTransactionAsync();
        try
        {
            var order = new Order()
            {
                TotalPrice = orderRequest.TotalPrice,
                TotalItem = orderRequest.TotalItem,
                PlacedDate = DateTime.UtcNow,
                UserAddressId = orderRequest.UserAddressId
            };

            await _unitOfWork.Order.AddAsync(order);
            await _unitOfWork.Save();

            await _orderDetailsService.Create(order.Id, orderRequest.OrderDetailsRequest);

            await _productService.Update(orderRequest.OrderDetailsRequest);

            await transaction.CommitAsync();


            return true;
        }
        catch (Exception ex)
        {
            await transaction.RollbackAsync();
            throw;
        }
    }
}