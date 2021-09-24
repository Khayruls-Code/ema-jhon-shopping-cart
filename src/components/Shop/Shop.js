import React, { useEffect, useState } from 'react';
import { fakeDb, getCart } from '../../utilities/fakeDb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import "./Shop.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

const Shop = (props) => {
  //get Product from products.json
  const [products, setProducts] = useState([])
  useEffect(()=> {
    fetch("products.JSON")
      .then(res => res.json())
      .then(data => {
        setProducts(data)
        setSearchProducts(data)
      })
  }, [])

  const [cart, setCart] = useState([])

  //add to cart button functionality
  const addToCartFn = (product) => {
    let newCart = [...cart, product]
    setCart(newCart)
    fakeDb(product.key)
  }

  //show local stirage product to ui

  useEffect(() => {
    if(products.length){
      const localCart = getCart()
      let storedcart = []
      for(const key in localCart){
        const localProducts = products.find(product => product.key === key);
        if(localProducts){
          const quantity = localCart[key]
          localProducts.quantity = quantity;
          storedcart.push(localProducts)
        }
      }
      setCart(storedcart)
    }
  }, [products])


  const [searchProducts, setSearchProducts] = useState([])
  const handleSearch = (event) => {
    let searchText = event.target.value;
    const machedProducts = products.filter(product => product.name.toLowerCase().includes(searchText.toLowerCase()))
    setSearchProducts(machedProducts)
  }

  return (
    <>
      <div className="search">
        <div className="box">
        <input onChange={handleSearch} type="text" placeholder="Search Product by name..."/>
        <button><FontAwesomeIcon className="searchIcon" icon={faSearch}/></button>
        </div>
      </div>
    <div className="shop-container">
      <div className="products">
        {
          searchProducts.map(product => <Product
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
    </>
  );
};

export default Shop;