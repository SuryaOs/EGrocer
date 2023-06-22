namespace EGrocer.Business.Orders;
public interface IOrderService
{
    Task<bool> Create(AddOrderRequest order);
}