import React, { Component } from 'react';
import Cart from './Cart';

class OnlineShopping extends Component {
    render() {
        const cartItems = [
            { itemname: 'Laptop', price: 60000 },
            { itemname: 'Phone', price: 25000 },
            { itemname: 'Headphones', price: 1500 },
            { itemname: 'Keyboard', price: 1000 },
            { itemname: 'Mouse', price: 800 }
        ];

        return (
            <div>
                <h1>Online Shopping Cart</h1>
                {cartItems.map((item, index) => (
                    <Cart key={index} itemname={item.itemname} price={item.price} />
                ))}
            </div>
        );
    }
}

export default OnlineShopping;
