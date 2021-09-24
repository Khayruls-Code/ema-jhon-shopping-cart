import "./Cart.css"

const Cart = (props) => {

  let price = 0;
  let shipping = 0;
  let quantity = 0
  for(let single of props.cart){
    if(!single.quantity){
      single.quantity = 1
    }
    price = price + single.price * single.quantity;
    quantity = quantity + single.quantity;
    shipping += single.shipping
  }

  let beforeTax = (price + shipping).toFixed(2);
  let estimated = (beforeTax * 10/100).toFixed(2);
  let total = parseFloat(beforeTax) + parseFloat(estimated)

  return (
    <div className="shop-cart">
      <h2>Order Summery</h2>
      <h3>Item Orderd: {quantity}</h3>
      <table>
        <tbody>
        <tr>
          <td>Item Price:</td>
          <td>${price.toFixed(2)}</td>
        </tr>
        <tr>
          <td>Shipping & Handalibg:</td>
          <td>${shipping.toFixed(2)}</td>
        </tr>
        <tr>
          <td>Total before Tax:</td>
          <td>$ {beforeTax}</td>
        </tr>
        <tr>
          <td>Estimated Tax:</td>
          <td>${estimated}</td>
        </tr>
        <tr>
          <td>Order Total:</td>
          <td>${total.toFixed(2)}</td>
        </tr>
        </tbody>
      </table>
      <button>Review Your Order</button>
    </div>
  );
};

export default Cart;