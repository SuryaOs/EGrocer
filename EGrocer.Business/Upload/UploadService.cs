using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;

namespace EGrocer.Business.Upload;

public class UploadService : IUploadService
{
    private IHostingEnvironment _hostingEnvironment;

    public UploadService(IHostingEnvironment hostingEnvironment)
    {
        _hostingEnvironment = hostingEnvironment;
    }

    public async Task Upload(IFormFile formFile, string featureName)
    {
        var wwwPath = _hostingEnvironment.WebRootPath;

        var filePath = Path.Combine(wwwPath, "images", featureName);
        if(!Directory.Exists(filePath))
            Directory.CreateDirectory(filePath);

        var imagePath = Path.Combine(filePath, formFile.FileName);

        if(File.Exists(imagePath))
            File.Delete(imagePath);

        using var fileStream = new FileStream(imagePath, FileMode.Create);
        await formFile.CopyToAsync(fileStream);

        return;
    }

}
