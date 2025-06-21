using System;
using System.Collections.Generic;

class Program
{
    static void Main()
    {
        List<Product> products = new List<Product>
        {
            new Product { Name = "iPhone 14", Category = "Mobile", Price = 999 },
            new Product { Name = "Samsung Galaxy", Category = "Mobile", Price = 850 },
            new Product { Name = "Dell Laptop", Category = "Laptop", Price = 1200 },
            new Product { Name = "Sony Headphones", Category = "Audio", Price = 150 }
        };

        Console.Write("Enter product name to search: ");
        string? input = Console.ReadLine();
        if (string.IsNullOrWhiteSpace(input))
        {
            Console.WriteLine("Please enter a valid product name.");
            return;
        }

        List<Product> result = ProductSearch.Search(products, input);

        if (result.Count > 0)
        {
            Console.WriteLine("\nSearch Results:");
            foreach (var p in result)
                Console.WriteLine($"{p.Name} | {p.Category} | ₹{p.Price}");
        }
        else
        {
            Console.WriteLine("No products found.");
        }
    }
}
