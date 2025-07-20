using JwtAuthDemo.Models;
using JwtAuthDemo.Services;
using Microsoft.AspNetCore.Mvc;

namespace JwtAuthDemo.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class AuthController : ControllerBase
    {
        private readonly IUserService _userService;

        public AuthController(IUserService userService)
        {
            _userService = userService;
        }

        [HttpPost("login")]
        public IActionResult Login(UserModel user)
        {
            var authenticatedUser = _userService.Authenticate(user.Username, user.Password);
            if (authenticatedUser == null)
                return Unauthorized("Invalid credentials");

            return Ok("Login successful");
        }
    }
}
