import React from 'react';

const ReviewItem = (props) => {
  const { product: { name, price, quantity, key }, handleRemove } = props
  return (
    <div className='singleProduct'>
      <div className='info'>
        <h2>{name}</h2>
        <p>Price: {price}</p>
        <p className='review-quantity'>Order Quantity: {quantity}</p>
        <button onClick={() => handleRemove(key)} className='addToCartBtn'>Remove</button>
      </div>
    </div>
  );
};

export default ReviewItem;