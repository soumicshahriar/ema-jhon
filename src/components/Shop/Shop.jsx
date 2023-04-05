import React, { useEffect, useState } from 'react';
import { addToDb, deleteShoppingCart, getShoppingCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'
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
    const storedCart = getShoppingCart();
    const saveCart = [];
    // step 1: get id from the added object
    for (const id in storedCart) {
      // get the product by using id
      const addedProduct = products.find(product => product.id === id)
      if (addedProduct) {
        // step 3: get quantity of the product
        const quantity = storedCart[id]
        addedProduct.quantity = quantity;

        // step 4: add the added product to the saveCart
        saveCart.push(addedProduct)
        console.log(addedProduct)
      }
    }
    // set the cart
    setCart(saveCart)
  }, [products])

  const handleAddToCart = (product) => {
    // console.log(product)
    const newCart = [...cart, product]
    setCart(newCart)
    addToDb(product.id)
  }
  const handleClearCart=()=>{
    setCart([]);
    deleteShoppingCart();

  }

  return (
    <div className='shop-container'>
      <div className="products-container">
        {
          products.map(product => <Product product={product} key={product.id} handleAddToCart={handleAddToCart} ></Product>)
        }
      </div>
      <div className="card-container">
        <Cart cart={cart} handleClearCart={handleClearCart}>
          <Link to ='/orders'>
            <button className='btn-proceed'>Review Order</button>
          </Link>
        </Cart>
      </div>
    </div>
  );
};

export default Shop;