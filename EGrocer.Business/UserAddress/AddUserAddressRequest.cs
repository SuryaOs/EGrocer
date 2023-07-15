namespace EGrocer.Business.UserAddresses;

public class AddUserAddressRequest
{
    public string City { get; set; } = string.Empty;
    public string State { get; set; } = string.Empty;
    public string Address1 { get; set; } = string.Empty;
    public string Address2 { get; set; } = string.Empty;
    public int ZipCode { get; set; }
    public string MobileNumber { get; set; } = string.Empty;
    public bool IsDefault { get; set; }
    public string UserId { get; set; } = string.Empty;
}