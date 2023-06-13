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

    public async Task Upload(IFormFile formFile, string filename)
    {
        var wwwPath = _hostingEnvironment.WebRootPath;

        var filePath = Path.Combine(wwwPath, "images", "product");
        if(!Directory.Exists(filePath))
            Directory.CreateDirectory(filePath);

        var imagePath = Path.Combine(filePath, filename, ".png");
        if(File.Exists(imagePath))
            File.Delete(imagePath);

        using(FileStream stream = File.Create(imagePath))
        {
            await formFile.CopyToAsync(stream);  
        }

        return;
    }

}
