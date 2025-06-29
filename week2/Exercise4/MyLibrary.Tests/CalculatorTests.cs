using NUnit.Framework;
using Moq;
using MyLibrary;

namespace MyLibrary.Tests
{
    public class CalculatorTests
    {
        [Test]
        public void AddNumbers_ReturnsCorrectSum()
        {
            var mockService = new Mock<ICalculatorService>();
            mockService.Setup(s => s.Add(2, 3)).Returns(5);

            var calculator = new Calculator(mockService.Object);
            var result = calculator.AddNumbers(2, 3);

            Assert.That(result, Is.EqualTo(5));
        }
    }
}
