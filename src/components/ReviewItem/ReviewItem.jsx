import React from 'react'
import './reviewitem.css'
import { TrashIcon } from '@heroicons/react/24/solid'

function ReviewItem({ product, handleRemoveFromCart }) {
    const { id, img, price, name, quantity } = product;
    return (
        <div className='review-item'>
            <img src={img} alt='' />
            <div className='review-details'>
                <p className='product-title'>{name}</p>
                <p>Price: <span className='org-text'>${price}</span></p>
                <p>Order Quantity: <span className='org-text'>${quantity}</span></p>
            </div>
            <button onClick={() => handleRemoveFromCart(id)} className='btn-delete'>
                <TrashIcon className="delete-icon" />
            </button>
        </div>
    )
}

export default ReviewItem