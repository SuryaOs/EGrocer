using EGrocer.Core.Categories;

namespace EGrocer.Core.Products;

public class Product
{
    public int Id {  get; set; }
    public string Name { get; set; } = string.Empty;
    public int Price { get; set; }
    public string Description { get; set; } = string.Empty;
    public int CategoryId { get; set; }
    public Category? Category { get; set; }

}
