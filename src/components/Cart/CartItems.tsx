
import CartItem from './CartItem'
import classes from './CartItems.module.css'
import ListCard from '../../UI/Card/ListCard'
import { useContext } from 'react'
import CartContext from '../../contexts/CartContext'
const CartItems = () => {
    const { state } = useContext(CartContext)
    let cartHeader = "Selected Items,double click on item name to delete"
    if (state.items.length === 0) {
        cartHeader = `you currently have no items in your cart :)`
    }
    const subTotal = state.items.reduce((total, item) => {
        return total + (item.price*item.quantity);
    },0)
    const delivery = subTotal*0.1;
    const total = subTotal + delivery;
    
    return (
        <div className={classes["cart-items"]}>
            <ListCard>
              
                <span className={classes["cart-header-text"]}>{cartHeader}</span>
                {state.items.map(_item=><CartItem key={_item.id} item={_item} />)}
            </ListCard>
            <div className={classes["checkout-controls"]}>
                <div><span>Subtotal</span><span>${subTotal.toFixed(2)}</span></div>
                <div><span>Delivery</span><span>${delivery.toFixed(2)}</span></div>
                <div><span>Total</span><span>${total.toFixed(2)}</span></div>
                <button disabled={state.items.length?true:false}>Checkout</button>
            </div>
           
       </div>
    )
}

export default CartItems
