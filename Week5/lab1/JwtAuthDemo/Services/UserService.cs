using JwtAuthDemo.Models;

namespace JwtAuthDemo.Services
{
    public class UserService : IUserService
    {
        private List<UserModel> _users = new List<UserModel>
        {
            new UserModel { Username = "dharani", Password = "1234" },
            new UserModel { Username = "admin", Password = "admin" }
        };

        public UserModel? Authenticate(string username, string password)
        {
            return _users.SingleOrDefault(x => x.Username == username && x.Password == password);
        }
    }
}
