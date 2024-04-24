import React from 'react';
import { BsCartPlusFill } from "react-icons/bs";
import './Product.css';

const Product = (props) => {
    if (!props.product) {
        return null; // Or handle the case when product is undefined
    }
    const { img, name, seller, quantity, price, ratings } = props.product; // Destructure directly from props

    const handleAddToCart = props.handleAddToCart;
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-info'>
                <h6 className='product-name'>{name}</h6>
                <p>Price: ${price}</p>
                <p>Manufacturer : {seller}</p>
                <p>Rating : {ratings} Stars</p>
            </div>
            <button onClick={() => handleAddToCart(props.product)} className='btn-cart'>
                Add to Cart
                <BsCartPlusFill></BsCartPlusFill>
            </button>
        </div>
    );
};

export default Product;
