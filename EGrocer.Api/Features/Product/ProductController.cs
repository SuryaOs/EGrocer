using EGrocer.Business.Products;
using Microsoft.AspNetCore.Mvc;

namespace EGrocer.Api.Features.Product;

[Route("product")]
[ApiController]
public class ProductController : ControllerBase
{
    private readonly IProductService _productService;
    public ProductController(IProductService productService)
    {
        _productService = productService;
    }
    [HttpGet]
    public async Task<IActionResult> Get()
    {
        var products = await _productService.GetAll();
        return Ok(products);
    }
    [HttpGet("getByCategory/{categoryId:int}")]
    public async Task<IActionResult> Get(int categoryId)
    {
        var products = await _productService.Get(categoryId);
        return Ok(products);
    }
    [HttpGet("getByProduct/{productId:int}")]
    public async Task<IActionResult> GetDetails(int productId)
    {
        var product = await _productService.GetDetails(productId);
        return Ok(product);
    }
}
