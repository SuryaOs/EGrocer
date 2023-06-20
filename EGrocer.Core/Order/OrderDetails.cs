using EGrocer.Core.Common.Entities;
using EGrocer.Core.Products;

namespace EGrocer.Core.Orders;

public class OrderDetails
{
    public int Id { get; set; }
    public int Quantity { get; set; }
    public int TotalPrice { get; set; }
    public DateTime LastModifiedDate { get; set; }

     // one to one relationship, foreign key
    public int StatusId { get; set; }
    public required Status Status { get; set; }
    // one to one relationship, foreign key
    public int ProductId { get; set; }
    public required Product Product { get; set; }

   // one to one relationship, foreign key
    public int OrderId { get; set; }
    public required Order Order { get; set; }
}