import { faCoffee,faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Product.css';
const Product = (props) => {
    
    const { name, image, price } = props.product;
    
    return (
        <div className='product'>
            <img src={image} alt="" />
            <div className='product-info'>
            <p className='product-name'>{name}</p>
            <p>Price: €{ price}</p>
            </div>
            <button onClick={()=>props.handleAddToCart(props.product)} className='button-cart'>
                <p className='button-text'>Add to Cart</p>
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Product;