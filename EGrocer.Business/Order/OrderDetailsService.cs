using EGrocer.Core.Common;
using EGrocer.Core.Orders;

namespace EGrocer.Business.Orders;
public class OrderDetailsService: IOrderDetailsService
{
    private readonly IUnitOfWork _unitOfWork;
    public OrderDetailsService(IUnitOfWork unitOfWork) {
        _unitOfWork = unitOfWork;
    }
    public async Task<bool> Create(int orderId, IEnumerable<AddOrderDetailsRequest> request){
        var orderDetails = request.Select(x => new OrderDetails{
            OrderId = orderId,
            ProductId = x.ProductId,
            StatusId = 1,
            Quantity = x.Quantity,
            TotalPrice = x.TotalPrice,
            LastModifiedDate = DateTime.UtcNow
        });

        await _unitOfWork.OrderDetails.AddRangeAsync(orderDetails);
        await _unitOfWork.Save();

        return orderDetails.First().Id > 0;;
    }
}