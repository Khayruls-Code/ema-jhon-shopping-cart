const getCart = () => {
  const cart = localStorage.getItem('cart')
  let cartObj;
  if(!cart){
    cartObj = {}
  }else{
    cartObj = JSON.parse(cart)
  }
  return cartObj;
}

const addToLocal = (objectName) => {
  localStorage.setItem('cart', JSON.stringify(objectName))
}

const fakeDb = (product) => {
  const cart = getCart();
  if(!cart[product]){
    cart[product] = 1;
  }else{
    cart[product] = cart[product] + 1
  }
  addToLocal(cart)
}

export {fakeDb, getCart}