namespace MoqHandsOn
{
    public interface IEmailService
    {
        void SendEmail(string to, string subject, string body);
    }

    public class NotificationManager
    {
        private readonly IEmailService _emailService;

        public NotificationManager(IEmailService emailService)
        {
            _emailService = emailService;
        }

        public void Notify(string userEmail)
        {
            string subject = "Welcome!";
            string body = "Thanks for joining our platform.";
            _emailService.SendEmail(userEmail, subject, body);
        }
    }
}
