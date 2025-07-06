using RetailStoreLab6.Data;
using RetailStoreLab6.Models;

Console.WriteLine("Lab 6 - Updating and Deleting Products");

using var context = new RetailContext();
context.Database.EnsureCreated();

var printer = context.Products.FirstOrDefault(p => p.Name == "Printer");
if (printer != null)
{
    printer.Price = 7500;
    context.SaveChanges();
    Console.WriteLine($"Updated: {printer.Name} new price = ₹{printer.Price}");
}

var speakers = context.Products.FirstOrDefault(p => p.Name == "Speakers");
if (speakers != null)
{
    context.Products.Remove(speakers);
    context.SaveChanges();
    Console.WriteLine($" Deleted: {speakers.Name}");
}

Console.WriteLine("\n Remaining Products:");
foreach (var product in context.Products.ToList())
{
    Console.WriteLine($"{product.ProductId} - {product.Name} - ₹{product.Price}");
}
