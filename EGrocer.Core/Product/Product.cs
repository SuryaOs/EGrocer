using EGrocer.Core.Categories;

namespace EGrocer.Core.Products;

public class Product
{
    public int Id {  get; set; }
    public string Name { get; set; } = string.Empty;
    public decimal Price { get; set; }
    public string Description { get; set; } = string.Empty;
    public string ImageName { get; set; } = string.Empty;
    public int AvailableQuantity { get; set; }

    // one to one relationship, foreign key
    public int CategoryId { get; set; }
    public Category? Category { get; set; }

}
