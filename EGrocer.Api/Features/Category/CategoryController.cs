using EGrocer.Business.Categories;
using Microsoft.AspNetCore.Mvc;

namespace EGrocer.Api.Features.Category
{
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
    }
}
