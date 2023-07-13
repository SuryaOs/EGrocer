using Microsoft.AspNetCore.Http;

namespace EGrocer.Business.Upload;

public interface IUploadService
{
    Task<string> Upload(IFormFile formFile, string featureName);
}
