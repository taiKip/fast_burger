import React from 'react'
import CartItem from './CartItem'
import classes from './CartItems.module.css'
import ListCard from '../../UI/Card/ListCard'
import { useContext } from 'react'
import CartContext from '../../contexts/CartContext'
const CartItems = () => {
    const {items,updateItems} = useContext(CartContext)
    const subTotal = items.reduce((total, item) => {
        return total + (item.price*item.quantity);
    },0)
    const delivery = 2.50;
    const total = subTotal+delivery;
    return (
        <div className={classes["cart-items"]}>
            <ListCard>
                {items.map(_item=><CartItem key={_item.id} item={_item} />)}
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
