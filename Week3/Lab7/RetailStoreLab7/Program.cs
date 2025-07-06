using RetailStoreLab7.Data;
using RetailStoreLab7.Models;
using System.Linq;

Console.WriteLine("Lab 7 - LINQ Queries on Products");

using var context = new RetailContext();
context.Database.EnsureCreated();

Console.WriteLine("\n All Products:");
foreach (var p in context.Products)
    Console.WriteLine($"{p.ProductId} - {p.Name} - ₹{p.Price}");

Console.WriteLine("\nProducts with Price > 5000:");
var expensiveProducts = context.Products.Where(p => p.Price > 5000);
foreach (var p in expensiveProducts)
    Console.WriteLine($"{p.Name} - ₹{p.Price}");

Console.WriteLine($"\nTotal Products: {context.Products.Count()}");

Console.WriteLine("\n Products Ordered by Price (High to Low):");
var sortedProducts = context.Products.ToList().OrderByDescending(p => p.Price);
foreach (var p in sortedProducts)
    Console.WriteLine($"{p.Name} - ₹{p.Price}");
