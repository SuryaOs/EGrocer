using EGrocer.Api.Exceptions;
using EGrocer.Business.Products;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace EGrocer.Api.Features.Product;

[Authorize]
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
        if (!products.Any())
            throw new NotFoundException("Products not found");

        return Ok(products);
    }
    [HttpGet("getByProduct/{productId:int}")]
    public async Task<IActionResult> GetDetails(int productId)
    {
        var product = await _productService.GetDetails(productId) ??
                     throw new NotFoundException("Product not found");
        return Ok(product);
    }
}
