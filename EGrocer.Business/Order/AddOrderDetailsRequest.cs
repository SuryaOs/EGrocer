namespace EGrocer.Business.Orders;

public class AddOrderDetailsRequest
{
    public int ProductId { get; set; }
    public int Quantity { get; set; }
    public int TotalPrice { get; set; }
}