using NUnit.Framework;
using Moq;
using MoqHandsOn;

namespace MoqHandsOn.Tests
{
    public class NotificationManagerTests
    {
        [Test]
        public void Notify_CallsSendEmailWithCorrectParams()
        {
            // Arrange
            var mockEmailService = new Mock<IEmailService>();
            var manager = new NotificationManager(mockEmailService.Object);
            string testEmail = "dharani@example.com";

            // Act
            manager.Notify(testEmail);

            // Assert
            mockEmailService.Verify(service =>
                service.SendEmail(
                    testEmail,
                    "Welcome!",
                    "Thanks for joining our platform."
                ),
                Times.Once);
        }
    }
}
