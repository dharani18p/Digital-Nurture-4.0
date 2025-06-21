using System;

public class FruitFactory
{
    public IFruit CreateFruit(string type)
    {
        if (type.ToLower() == "apple")
            return new Apple();
        else if (type.ToLower() == "banana")
            return new Banana();
        else
            throw new Exception("Invalid fruit type");
    }
}
