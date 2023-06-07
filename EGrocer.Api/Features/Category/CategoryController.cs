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
    [HttpDelete("{id:int}")]
    public async Task<IActionResult> Delete(int id)
    {
        var isDeleted = await _categoryService.Delete(id);
        return Ok(isDeleted);
    }
    [HttpPut("{id:int}")]
    public async Task<IActionResult> Update(int id, CategoryRequest category)
    {
        var result = await _categoryService.Update(id, category);
        return Ok(result);
    }
}
