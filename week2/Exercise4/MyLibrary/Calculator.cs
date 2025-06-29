namespace MyLibrary
{
    public interface ICalculatorService
    {
        int Add(int a, int b);
    }

    public class Calculator
    {
        private readonly ICalculatorService _service;

        public Calculator(ICalculatorService service)
        {
            _service = service;
        }

        public int AddNumbers(int x, int y)
        {
            return _service.Add(x, y);
        }
    }
}
