import React from 'react'
import CartIcon from '../../assets/cart_image.png'
import classes from './CartButton.module.css'
const CartButton = () => {
    return (
       <div className={classes.wrapper}>
            <div className={classes["cart-button"]}>
                <p>{2}</p>
                <img src={CartIcon} />
            </div>
       </div>
          
       
    )
}

export default CartButton
