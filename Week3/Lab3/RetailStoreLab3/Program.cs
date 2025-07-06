using System;
using RetailStoreLab3.Data;

Console.WriteLine("🛠 Lab 3 - EF Core CLI with SQLite");

using var context = new RetailContext();
context.Database.EnsureCreated();

Console.WriteLine("Database has been ensured.");
