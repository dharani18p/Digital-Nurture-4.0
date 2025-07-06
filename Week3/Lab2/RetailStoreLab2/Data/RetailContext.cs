using Microsoft.EntityFrameworkCore;
using RetailStoreLab2.Models;

namespace RetailStoreLab2.Data;

public class RetailContext : DbContext
{
    public DbSet<Product> Products { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder options)
        => options.UseSqlite("Data Source=retail.db");

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Product>().HasData(
            new Product { ProductId = 1, Name = "Laptop", Price = 70000 },
            new Product { ProductId = 2, Name = "Keyboard", Price = 1500 },
            new Product { ProductId = 3, Name = "Mouse", Price = 500 }
        );
    }
}
