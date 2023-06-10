using EGrocer.Api.Exceptions;
using EGrocer.Business.Categories;
using Microsoft.AspNetCore.Mvc;

namespace EGrocer.Api.Features.Categories;

[Route("category")]
[ApiController]
public class CategoryController : ControllerBase
{
    private readonly ICategoryService _categoryService;

    public CategoryController(ICategoryService categoryService)
    {
        _categoryService = categoryService;
    }
    [HttpGet]
    public async Task<IActionResult> Get()
    {
        var categories = await _categoryService.GetAll();
        return Ok(categories);
    }
    [HttpPost]
    public async Task<IActionResult> Create(CategoryRequest category)
    {
        var result = await _categoryService.Create(category);

        //return result ? CreatedAtAction(
        //    actionName: nameof(Get),
        //    routeValues: new { id = category.Id },
        //    value: category)
        //    : StatusCode(500, "An internal server error occurred.");
        return Ok(result);
    }
    [HttpDelete("{categoryId:int}")]
    public async Task<IActionResult> Delete(int categoryId)
    {
        var isDeleted = await _categoryService.Delete(categoryId)
                                ?? throw new NotFoundException("Category not found");
        return Ok(isDeleted);
    }
    [HttpPut("{categoryId:int}")]
    public async Task<IActionResult> Update(int categoryId, CategoryRequest category)
    {
        var isUpdated = await _categoryService.Update(categoryId, category)
                                ?? throw new NotFoundException("Category not found");
        return Ok(isUpdated);
    }
}
