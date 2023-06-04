using EGrocer.Core.Common;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace EGrocer.Api.Features.Category
{
    [Route("category")]
    [ApiController]
    public class CategoryController : ControllerBase
    {
        private readonly IUnitOfWork _unitOfWork;

        public CategoryController(IUnitOfWork unitOfWork)
        {
            _unitOfWork = unitOfWork;
        }
        [HttpGet]
        public IActionResult Get() 
        {
            var Categories = _unitOfWork.Category.GetAllAsync().Result;
            return Ok(Categories);
        }
    }
}
