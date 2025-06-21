using System;

public class Singleton
{
    private static Singleton instance = null;
    private static readonly object lockObj = new object();

    private Singleton()
    {
        Console.WriteLine("Singleton instance created.");
    }

    public static Singleton Instance
    {
        get
        {
            lock (lockObj)
            {
                if (instance == null)
                {
                    instance = new Singleton();
                }
                return instance;
            }
        }
    }

    public void ShowMessage()
    {
        Console.WriteLine("Hello from Singleton!");
    }
}

class Program
{
    static void Main(string[] args)
    {
        Singleton s1 = Singleton.Instance;
        s1.ShowMessage();

        Singleton s2 = Singleton.Instance;
        s2.ShowMessage();

        Console.WriteLine($"s1 and s2 refer to same instance: {ReferenceEquals(s1, s2)}");
    }
}
