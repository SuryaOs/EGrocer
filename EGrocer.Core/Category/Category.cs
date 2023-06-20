using EGrocer.Core.Products;

namespace EGrocer.Core.Categories;

public class Category
{
    public int Id {  get; set; }
    public string Name { get; set; } = string.Empty;
    public string Description { get; set; } = string.Empty;

    // One to many relationships
    public List<Product>? Products { get; set; }

}
