
import classes from './CartItem.module.css'
import burger from '../../assets/burger_image.png'
import Card from '../../UI/Card/Card'
import { ICartItem } from '../../interfaces/ICartItem'
import { useContext } from 'react'
import CartContext from '../../contexts/CartContext'

const CartItem = ({ item }: { item: ICartItem }) => {
    const { dispatch } = useContext(CartContext)
    const handleIncrement = () => {
        dispatch({type:"increment",payload:item.id})
    }
    const handleDecrement = () => {
dispatch({type:"decrement",payload:item.id})
    }
    const handleInput: React.ChangeEventHandler<HTMLInputElement> = (event) => {

    }

    return (
        <Card >
            <>
                <span ><img src={burger}  alt ="a delicious burger"/></span>
                <span>
                    <h3>{item.name}</h3>
                    <p className={classes.amount}>€ {item.price * item.quantity}</p>
                </span>
                <span className={classes.controls}>
                    <span onClick={handleDecrement} className={classes.button}>-</span>
                    <input placeholder="1" value={item.quantity} onChange={handleInput} />
                    <span onClick={handleIncrement} className={classes.button}>+</span>
                </span>
            </>
        </Card>
    )
}

export default CartItem
