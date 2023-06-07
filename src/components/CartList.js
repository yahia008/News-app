import React from 'react'
import {Box, ImageContainer, Image, Price, Quantity, Button, Buttom, ButtomBox} from '../data/cartListElement'
import { useDispatch } from 'react-redux'
import { remove, increment,decrement,addToCart} from '../Services/Cartslice'
import { useState } from 'react'

const CartList = ({cart}) => {
    const dispatch = useDispatch()
    const [newState, setState] = useState(cart)

    const handleRemove = (newState) => {
      setState(dispatch(remove(newState.id)))
    }

    
    const increment = (cart) => {
      
     setState(dispatch(addToCart(cart)))
     

    }
  return (
    <>

    <Box> 
        <ImageContainer>
            <Image>
                <img src={newState.img}/>
            </Image>
            <Button onClick={()=>handleRemove(newState)}>Remove</Button>
        </ImageContainer>

        <Price>${newState.price}</Price>
        <Quantity>
          <Buttom onClick={()=>incrementer(cart)}>+</Buttom>
           {newState.quantity}
          <Buttom>-</Buttom>

        </Quantity>
        <Quantity>
           ${newState.quantity * newState.price}
        </Quantity>
    </Box>
    
    
    </>
  )
  
}

export default CartList
