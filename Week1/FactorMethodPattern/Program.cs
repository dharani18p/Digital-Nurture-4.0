using System;

class Program
{
    static void Main(string[] args)
    {
        FruitFactory factory = new FruitFactory();

        Console.WriteLine("Enter fruit type (apple/banana):");
        string input = Console.ReadLine();

        try
        {
            IFruit fruit = factory.CreateFruit(input);
            fruit.GetName();
        }
        catch (Exception ex)
        {
            Console.WriteLine(ex.Message);
        }
    }
}
