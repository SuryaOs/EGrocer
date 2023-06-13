using EGrocer.Business.Upload;
using Microsoft.AspNetCore.Mvc;

namespace EGrocer.Api.Features.Upload
{
    [Route("api/[controller]")]
    [ApiController]
    public class UploadController : ControllerBase
    {
        private readonly IUploadService _uploadService;
        public UploadController(IUploadService uploadService)
        {
            _uploadService = uploadService;
        }        
    }
}
