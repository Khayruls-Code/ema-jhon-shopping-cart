import { useState, useEffect } from 'react'
import { getCart } from '../utilities/fakeDb'

const useCart = products => {
  const [cart, setCart] = useState([])
  useEffect(() => {
    if (products.length) {
      const localCart = getCart()
      const storedCart = []
      for (const key in localCart) {
        const matched = products.find(product => product.key === key)
        if (matched) {
          const quantity = localCart[key]
          matched.quantity = quantity;
          storedCart.push(matched)
        }
      }
      setCart(storedCart)
    }
  }, [products])
  return [cart, setCart]
}

export default useCart;