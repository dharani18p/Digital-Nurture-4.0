using RetailStoreLab4.Data;

Console.WriteLine(" Lab 4 - Seeding Data Using EF Core");

using var context = new RetailContext();
context.Database.EnsureCreated();

Console.WriteLine("Database is ensured and  data is inserted via migration.");
