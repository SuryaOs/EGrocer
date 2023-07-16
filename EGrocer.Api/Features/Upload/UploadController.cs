using EGrocer.Business.Upload;
using Microsoft.AspNetCore.Mvc;

namespace EGrocer.Api.Features.Upload;

[Route("Upload")]
[ApiController]
public class UploadController : ControllerBase
{
    private readonly IUploadService _uploadService;
    public UploadController(IUploadService uploadService)
    {
        _uploadService = uploadService;
    }
    [HttpPost]
    public async Task<IActionResult> Upload([FromForm] IFormFile file)
    {
        var featureName = Request.Form["featureName"];
        var imageName = await _uploadService.Upload(file, featureName);
        var response = new { ImageName = imageName };
        return Ok(response);
    }
}
