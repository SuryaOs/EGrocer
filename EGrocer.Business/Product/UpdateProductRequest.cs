namespace EGrocer.Business.Products;

public class UpdateProductRequest
{
    public int Id { get; set; }
    public string Name { get; set; } = string.Empty;
    public decimal Price { get; set; }
    public string Description { get; set; } = string.Empty;
    public string ImageName { get; set; } = string.Empty;
    public int AvailableQuantity { get; set; }
    public int CategoryId { get; set; }
}