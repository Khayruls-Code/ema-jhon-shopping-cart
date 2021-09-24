import React from 'react';
import "./Product.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart} from '@fortawesome/free-solid-svg-icons'
import Rating from 'react-rating';

const Product = (props) => {
  const {name, img, seller, price, stock, star} = props.product;
  return (
    <div className="singleProduct">
      <div className="image">
        <img src={img} alt="" />
      </div>
      <div className="info">
        <h2>{name}</h2>
        <p className="seller">By: {seller}</p>
        <div className="price-star">
          <h3>Price: ${price}</h3>
          <div className="ratting">
            <Rating className="star"
            initialRating={star}
            emptySymbol="far fa-star"
            fullSymbol="fas fa-star"
            />
          </div>
        </div>
        <div className="stoke-feature">
          <p className="stoke">only {stock} left in stock - order soon</p>
        </div>
        <button onClick={()=> props.addToCartFn(props.product)} className="addToCartBtn"><FontAwesomeIcon icon={faShoppingCart}/> Add To Cart</button>
      </div>
    </div>
  );
};

export default Product;