using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using EGrocer.Core.Common.Authentication;
using EGrocer.Core.Users;
using Microsoft.AspNetCore.Identity;
using Microsoft.Extensions.Options;
using Microsoft.IdentityModel.Tokens;

namespace EGrocer.Infrastructure.Common.Authentication;

public class JwtTokenGenerator : IJwtTokenGenerator
{
    private readonly JwtSettings _jwtSettings;
    private readonly UserManager<User> _userManager;
    private readonly RoleManager<IdentityRole> _roleManager;

    public JwtTokenGenerator(IOptions<JwtSettings> jwtSettings, UserManager<User> userManager, RoleManager<IdentityRole> roleManager)
    {
        _jwtSettings = jwtSettings.Value;
        _userManager = userManager;
        _roleManager = roleManager;
    }

    public async Task<string> GenerateToken(User user)
    {
        var signingCredentials = new SigningCredentials(
    new SymmetricSecurityKey(
        Encoding.UTF8.GetBytes(_jwtSettings.Secret)),
    SecurityAlgorithms.HmacSha256);


        var claims = await GetAllValidClaims(user);

        var securityToken = new JwtSecurityToken(
            issuer: _jwtSettings.Issuer,
            audience: _jwtSettings.Audience,
            expires: DateTime.UtcNow.AddMinutes(_jwtSettings.ExpiryMinutes),
            claims: claims,
            signingCredentials: signingCredentials);

        return new JwtSecurityTokenHandler().WriteToken(securityToken);
    }
    private async Task<List<Claim>> GetAllValidClaims(User user)
    {
        var _options = new IdentityOptions();

        var claims = new List<Claim>
        {
            new Claim(JwtRegisteredClaimNames.Email, user.Email),
            new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString()),
        };

        //Get all claims belong to user
        var userClaims = await _userManager.GetClaimsAsync(user);
        claims.AddRange(userClaims);

        //Get user role and add it to claims
        var userRoles = await _userManager.GetRolesAsync(user);

        foreach(var userRole in userRoles)
        {

            //in case, we have added more claims to the role, adding that too
            //claims belongs to the role
            var role = await _roleManager.FindByNameAsync(userRole);

            if(role != null)
            {
                claims.Add(new Claim(ClaimTypes.Role, userRole));

                var roleClaims = await _roleManager.GetClaimsAsync(role);
                foreach(var roleClaim in  roleClaims)
                {
                    claims.Add(roleClaim);
                }
            }
        }
        return claims;
    }
}