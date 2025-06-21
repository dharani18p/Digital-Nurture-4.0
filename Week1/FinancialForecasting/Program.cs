using System;
using System.Collections.Generic;

class Program
{
    static void Main()
    {
        List<double> revenues = new List<double> { 10000, 12000, 13500 };

        Console.WriteLine("📊 Past Revenues:");
        for (int i = 0; i < revenues.Count; i++)
        {
            Console.WriteLine($"Month {i + 1}: ₹{revenues[i]}");
        }
        double totalGrowth = 0;
        for (int i = 1; i < revenues.Count; i++)
        {
            totalGrowth += revenues[i] - revenues[i - 1];
        }
        double avgGrowth = totalGrowth / (revenues.Count - 1);

        double nextMonthForecast = revenues[^1] + avgGrowth;

        Console.WriteLine($"\n Forecasted Revenue for Next Month: ₹{nextMonthForecast:F2}");
    }
}
