namespace EGrocer.Business.Orders;

public interface IOrderDetailsService
{
    Task<bool> Create(int orderId, IEnumerable<AddOrderDetailsRequest> request);
}