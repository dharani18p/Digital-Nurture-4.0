using Microsoft.EntityFrameworkCore;
using RetailStoreLab7.Models;

namespace RetailStoreLab7.Data;

public class RetailContext : DbContext
{
    public DbSet<Product> Products { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder options)
        => options.UseSqlite("Data Source=retail_lab7.db");

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Product>().HasData(
            new Product { ProductId = 1, Name = "Monitor", Price = 12000 },
            new Product { ProductId = 2, Name = "Printer", Price = 8000 },
            new Product { ProductId = 3, Name = "Speakers", Price = 3000 },
            new Product { ProductId = 4, Name = "Mouse", Price = 900 },
            new Product { ProductId = 5, Name = "Keyboard", Price = 1500 }
        );
    }
}
