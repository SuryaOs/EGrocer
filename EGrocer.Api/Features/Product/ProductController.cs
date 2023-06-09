﻿using EGrocer.Api.Exceptions;
using EGrocer.Business.Products;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace EGrocer.Api.Features.Product;

// [Authorize]
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

    [HttpPost]
    public async Task<IActionResult> Add(AddProductRequest productRequest)
    {
        return Ok(await _productService.Add(productRequest));
    }

    [HttpDelete("{productId:int}")]
    public async Task<IActionResult> Delete(int productId)
    {
        var isDeleted = await _productService.Delete(productId) ??
                        throw new NotFoundException("Product not found");

        return Ok(isDeleted);
    }
    [HttpPut]
    public async Task<IActionResult> Update(UpdateProductRequest productRequest)
    {
         var isUpdated = await _productService.Update(productRequest) ??
                        throw new NotFoundException("Product not found");

        return Ok(isUpdated);
    }
}
