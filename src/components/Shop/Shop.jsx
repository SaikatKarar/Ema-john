import React, { useEffect, useState } from 'react';
import './Shop.css'
import { addToDb, getShoppingCart } from '../../utilities/fakedb';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import { Link } from 'react-router-dom';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);
    useEffect(() => {
        const storedCart = getShoppingCart()
        const savedCart = [];
        for (const id in storedCart) {
            const savedProduct = products.find(product => product.id === id)
            if (savedProduct) {
                const quantity = storedCart[id]
                savedProduct.quantity = quantity;
                savedCart.push(savedProduct)
            }
            // console.log(savedCart);
        }
        setCart(savedCart)
    }, [products])

    const handleAddToCart = (product) => {
        // const newCart = [...cart, product];

        let newCart = [];
        const exists = cart.find(pd => pd.id === product.id);
        if (!exists) {
            product.quantity = 1;
            newCart = [...cart, product]
        } else {
            exists.quantity = exists.quantity + 1;
            const remaining = cart.filter(pd => pd.id !== product.id);
            newCart = [...remaining, exists];
        }

        setCart(newCart);
        addToDb(product.id);

    }

    const handleClearCart = () => {
        setCart([])
    }

    return (
        <div className='shop-container'>
            <div className="products-container">
                {
                    products.map(product => (<Product
                        key={product.id}
                        product={product}
                        handleAddToCart={handleAddToCart}
                    ></Product>)

                    )}
            </div>
            <div className="cart-container">
                <Cart handleClearCart={handleClearCart} cart={cart}>
                    <Link to="/orders">
                        <button>Review Order</button>
                    </Link>
                </Cart>
            </div>
        </div>
    );
};

export default Shop;