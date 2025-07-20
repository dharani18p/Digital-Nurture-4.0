using JwtAuthDemo.Models;

namespace JwtAuthDemo.Services
{
    public interface IUserService
    {
        UserModel? Authenticate(string username, string password);
    }
}
