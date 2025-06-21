using System;
using System.Collections.Generic;
using System.Linq;

public class ProductSearch
{
    public static List<Product> Search(List<Product> products, string keyword)
    {
        return products
            .Where(p => p.Name.ToLower().Contains(keyword.ToLower()))
            .ToList();
    }
}
