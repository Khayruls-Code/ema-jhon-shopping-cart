const getCart = () => {
  const cart = localStorage.getItem('cart')
  let cartObj;
  if(!cart){
    cartObj = []
  }else{
    cartObj = JSON.parse(cart)
  }
  return cartObj;
}

const fakeDb = (product) => {
  const cart = getCart()
  if(cart.indexOf(product) === -1){
    cart.push = product;
  }
}

export default fakeDb;