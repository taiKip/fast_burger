import React from 'react'
import CartItem from './CartItem'
import classes from './CartItems.module.css'
import ListCard from '../../UI/Card/ListCard'
const CartItems = () => {
    const subTotal = 11.80;
    const delivery = 2.50;
    const total = 14.30;
    return (
        <div className={classes["cart-items"]}>
            <ListCard>
                <CartItem />
                <CartItem />
             <CartItem/>   
            </ListCard>
            <div className={classes["checkout-controls"]}>
                <div><span>Subtotal</span><span>${subTotal.toFixed(2)}</span></div>
                <div><span>Delivery</span><span>${delivery.toFixed(2)}</span></div>
                <div><span>Total</span><span>${total.toFixed(2)}</span></div>
                <button>Checkout</button>
            </div>
           
       </div>
    )
}

export default CartItems
