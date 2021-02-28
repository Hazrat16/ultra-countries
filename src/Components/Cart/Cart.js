import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    console.log(cart);
    const totalPopulation = cart.reduce((sum,country) =>sum + country.population,0)
    return (
        <div>
            <h2>This is cart: {cart.length}</h2>
            <p>Total Population : {totalPopulation}</p>
        </div>
    );
};

export default Cart;