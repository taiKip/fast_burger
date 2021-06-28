import React from 'react'
import { useContext ,useEffect} from 'react'
import CartIcon from '../../assets/cart_image.png'
import CartContext from '../../contexts/CartContext'
import classes from './CartButton.module.css'
const CartButton = ({ onClick }: { onClick: () => void }) => {
    const { items } = useContext(CartContext)
    let style = classes["cart-button"]
    useEffect(() => {
       
    },[items])

    return (
       <div className={classes.wrapper} onClick={onClick}>
            <div className={style}>
                <p>{items.length}</p>
                <img src={CartIcon} />
            </div>
       </div>
          
       
    )
}

export default CartButton
