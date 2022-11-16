import React, { useState } from 'react';
import './Cart.css'
const Cart = (props) => {
    const [randomProduct, setRandomProduct] = useState({});
    const { cart,clearCart } = props;

    const handleRandom = () => {
        const randomNumber = Math.floor(Math.random() * cart.length);
        const item = cart[randomNumber];
        setRandomProduct(item);
    };
    return (
        <div className='cart'>
            <h3>Order Summary</h3>
            <p>Selected Items: {cart.length}</p>
            
            <div>
                <button className='random-btn' onClick={handleRandom}>Choose one for me</button>
                <button onClick={clearCart} className='clear-btn'>Choose again</button>
                 {Object.keys (randomProduct).length >0 && (
                <div className='cart-item'>
                        <img src={randomProduct.image} alt="" />
                        <div>
                            <p>{randomProduct.name}</p>
                            <p> €{randomProduct.price }</p>
                        </div>
                    </div>)}
            </div>
            {
                cart.map((product, index) => (
                    <div key={index} className='cart-item'>
                        <img src={product.image} alt="" />
                        <div>
                            <p>{product.name}</p>
                            <p> €{product.price }</p>
                        </div>
                    </div>
                ))
            }
        </div>
    );
};

export default Cart;