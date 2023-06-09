using EGrocer.Api.Exceptions;

namespace EGrocer.Api.Middleware;

public class ExceptionHandlingMiddleware : IMiddleware
{
    public async Task InvokeAsync(HttpContext context, RequestDelegate next)
    {
        try
        {
            await next(context);
        }
        catch (Exception ex)
        {
            await HandleExceptionAsync(ex, context);
        }
    }

    private static async Task HandleExceptionAsync(Exception ex, HttpContext context)
    {
        context.Response.ContentType = "application/json";

        var errorDetails = new ErrorDetails
        {
            Message = ex.Message,
            StatusCode = ex switch
            {
                BadRequestException => StatusCodes.Status400BadRequest,
                NotFoundException => StatusCodes.Status404NotFound,
                _ => StatusCodes.Status500InternalServerError
            }
        };

        await context.Response.WriteAsync(errorDetails.ToString());
    }
}