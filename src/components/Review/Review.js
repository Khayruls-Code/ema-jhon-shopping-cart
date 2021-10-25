import React from 'react';
import useProducts from "../../Hooks/useProducts"
import useCart from "../../Hooks/useCart"
import Cart from '../Cart/Cart'
import ReviewItem from '../ReviewItem/ReviewItem'
import { placeOrder, removeFromDb } from "../../utilities/fakeDb";
import { useHistory } from 'react-router';

const Review = () => {
  const [products] = useProducts()
  const [cart, setCart] = useCart(products)
  const history = useHistory()

  const handleRemove = (key) => {
    const restItem = cart.filter(product => product.key !== key)
    setCart(restItem)
    removeFromDb(key)
  }

  const handleProceesOrder = () => {
    history.push('/shipping')
    // setCart([])
    // placeOrder()
  }
  return (
    <div className="shop-container">
      <div className="products">
        {
          cart.map(product => <ReviewItem
            key={product.key}
            product={product}
            handleRemove={handleRemove}
          />)
        }
      </div>
      <div className="cart">
        <Cart cart={cart}>
          <button onClick={handleProceesOrder}>Proceed To Order</button>
        </Cart>
      </div>
    </div>
  );
};

export default Review;