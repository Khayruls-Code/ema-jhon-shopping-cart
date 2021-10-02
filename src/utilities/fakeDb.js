const getCart = () => {
  const cart = localStorage.getItem('cart')
  let cartObj;
  if (!cart) {
    cartObj = {}
  } else {
    cartObj = JSON.parse(cart)
  }
  return cartObj;
}

const addToLocal = (objectName) => {
  localStorage.setItem('cart', JSON.stringify(objectName))
}

const fakeDb = (product) => {
  const cart = getCart();
  if (!cart[product]) {
    cart[product] = 1;
  } else {
    cart[product] = cart[product] + 1
  }
  addToLocal(cart)
}

const removeFromDb = (productKey) => {
  const cart = getCart();
  delete cart[productKey]
  addToLocal(cart)
}

const placeOrder = () => {
  localStorage.removeItem('cart')
}

export { fakeDb, getCart, removeFromDb, placeOrder }