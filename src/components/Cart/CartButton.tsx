
import { useState } from 'react'
import { useEffect } from 'react'
import { useContext} from 'react'
import CartIcon from '../../assets/cart_image.png'
import CartContext from '../../contexts/CartContext'
import classes from './CartButton.module.css'
const CartButton = ({ onClick }: { onClick: () => void }) => {
    
    const { state } = useContext(CartContext)
  const [animate,setAnimate] = useState(false)
  const btnStyles =`${classes["cart-button"]} ${animate?classes.add:''}`
    useEffect(() => {
        if (state.items.length === 0) {
            return
        }
        setAnimate(true)
      const timer =   setTimeout(() => {
           setAnimate(false)
      }, 200)
        return (()=>clearTimeout(timer))
},[state.items])
    return (
       <div className={classes.wrapper} onClick={onClick}>
            <div className={btnStyles}>
                <p>{state.items.length}</p>
                <img src={CartIcon} alt="burger" />
            </div>
       </div>
          
       
    )
}

export default CartButton
