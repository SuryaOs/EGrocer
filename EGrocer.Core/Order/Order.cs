using EGrocer.Core.Users;

namespace EGrocer.Core.Orders;

public class Order
{
    public int Id { get; set; }
    public int TotalPrice { get; set; }
    public int TotalItem { get; set; }
    public DateTime PlacedDate { get; set; }
    public DateTime DeliveredDate { get; set; }

    // one to many relations
    public List<OrderDetails>? OrderDetails { get; set; }

    // one to one relationship, foreign key
    public int UserAddressId { get; set; }
    public UserAddress? UserAddress { get; set; }

}