using RetailStoreLab5.Data;

Console.WriteLine(" Lab 5 - Retrieving Data from SQLite DB");

using var context = new RetailContext();
context.Database.EnsureCreated();

var products = context.Products.ToList();

Console.WriteLine("\n Product List:");
foreach (var product in products)
{
    Console.WriteLine($"{product.ProductId} - {product.Name} - ₹{product.Price}");
}
