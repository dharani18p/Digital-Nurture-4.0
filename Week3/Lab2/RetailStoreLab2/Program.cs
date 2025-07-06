using System;
using RetailStoreLab2.Data;

Console.WriteLine(" Retail Inventory System using EF Core 8.0 + SQLite");

using var context = new RetailContext();
context.Database.EnsureDeleted();
context.Database.EnsureCreated();

Console.WriteLine(" Database created and ready.");


