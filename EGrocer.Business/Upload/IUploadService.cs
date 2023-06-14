using Microsoft.AspNetCore.Http;

namespace EGrocer.Business.Upload;

public interface IUploadService
{
    Task Upload(IFormFile formFile, string featureName);
}
