import React from 'react'

import { useSelector } from 'react-redux'
import CartList from './CartList'
import {Box} from '../data/cartListElement'
import { ButtomBox, Buttom, Main } from '../data/cartListElement'

const Cart = () => {
const carts = useSelector(state => state.cart)

console.log(carts)
  return (
    <>
    {
      carts.map((cart) => (<CartList cart={cart} key={cart.id}/>))
    }

    
    </>
  )
}

export default Cart
