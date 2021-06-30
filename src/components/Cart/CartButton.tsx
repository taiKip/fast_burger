
import { useContext} from 'react'
import CartIcon from '../../assets/cart_image.png'
import CartContext from '../../contexts/CartContext'
import classes from './CartButton.module.css'
const CartButton = ({ onClick }: { onClick: () => void }) => {
    const {state } = useContext(CartContext)
    let style = classes["cart-button"]
   
    return (
       <div className={classes.wrapper} onClick={onClick}>
            <div className={style}>
                <p>{state.items.length}</p>
                <img src={CartIcon} alt="burger" />
            </div>
       </div>
          
       
    )
}

export default CartButton
