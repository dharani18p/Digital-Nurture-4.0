import React, { Component } from 'react';

class Cart extends Component {
    render() {
        const { itemname, price } = this.props;

        return (
            <div style={{ border: '1px solid #000', margin: '10px', padding: '10px', borderRadius: '8px' }}>
                <h3>Item: {itemname}</h3>
                <p>Price: ₹{price}</p>
            </div>
        );
    }
}

export default Cart;
