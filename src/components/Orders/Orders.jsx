import React, { useState } from 'react'
import Cart from '../Cart/Cart';
import { useLoaderData } from 'react-router-dom';
import ReviewItem from '../ReviewItem/ReviewItem';
import "./order.css"


function Orders() {
    const savesCart = useLoaderData();
    const [cart, setCart] = useState(savesCart);

    const handleRemoveFromCart = (id) => {
        const remaining = cart.filter(product => product.id !== id);
        setCart(remaining)
    }

    const handleClearCart = () => {
        setCart([])

    }

    return (
        <div className='shop-container'>
            <div className='review-container'>
                {
                    savesCart.map(product => <ReviewItem key={product.id} product={product} handleRemoveFromCart={handleRemoveFromCart} />)
                }
            </div>
            <div className='cart-container'>
                {/* <Cart cart={cart} handleClearCart={handleClearCart}>
                    <div>From orders</div>
                    <Cart /> */}
                <cart cart={cart} handleClearCart={handleClearCart}>
                    <div>From orders</div>
                </cart>
            </div>
        </div>
    )
}

export default Orders

