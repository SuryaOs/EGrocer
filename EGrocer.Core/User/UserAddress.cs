namespace EGrocer.Core.Users;

public class UserAddress
{
    public int Id { get; set; }
    public string City { get; set; } = string.Empty;
    public string State { get; set; } = string.Empty;
    public string Address1 { get; set; } = string.Empty;
    public string Address2 { get; set; } = string.Empty;
    public int ZipCode { get; set; }
    public bool IsDefault { get; set; }

    // one to one relationship, foreign key
    public string UserId { get; set; } = string.Empty;
    public required User User { get; set; }

}