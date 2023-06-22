using EGrocer.Business.Orders;
using Microsoft.AspNetCore.Mvc;

namespace EGrocer.Api.Features.Order;

[ApiController]
[Route("order")]
public class OrderController : ControllerBase
{
    private readonly IOrderService _orderService;
    public OrderController(IOrderService orderService) {
        _orderService = orderService;
    }

    [HttpPost]
    public async Task<IActionResult> Create(AddOrderRequest request)
    {
        var result = await _orderService.Create(request);
        return Ok(result);
    }
}