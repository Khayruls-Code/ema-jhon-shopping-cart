import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import "./Shop.css"

const Shop = () => {
  //get Product from products.json
  const [products, setProducts] = useState([])

  useEffect(()=> {
    fetch("products.JSON")
      .then(res => res.json())
      .then(data => setProducts(data))
  }, [])

  const [cart, setCart] = useState([])

  const addToCartFn = (product) => {
    let newCart = [...cart, product]
    setCart(newCart)
  }


  return (
    <div className="shop-container">
      <div className="products">
        {
          products.slice(0,10).map(product => <Product
            key={product.key}
            product={product}
            addToCartFn = {addToCartFn}
          />)
        }
      </div>
      <div className="cart">
        <Cart
          cart={cart}
        />
      </div>
    </div>
  );
};

export default Shop;