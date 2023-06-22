using EGrocer.Business.Orders;

namespace EGrocer.Business.Orders;
public class AddOrderRequest
{
    public int UserAddressId { get; set; }
    public int TotalItem { get; set; }
    public int TotalPrice { get; set; }
    public required IEnumerable<AddOrderDetailsRequest> OrderDetailsRequest { get; set; }
}
