namespace RetailStoreLab2.Models;

public class Product
{
    public int ProductId { get; set; }
    public string? Name { get; set; } // Marked nullable to avoid CS8618 warning
    public decimal Price { get; set; }
}
