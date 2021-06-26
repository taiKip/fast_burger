import {useState} from 'react'
import classes from './CartItem.module.css'
import burger from '../../assets/burger_image.png'
import Card from '../../UI/Card/Card'
import { ICartItem } from '../../interfaces/ICartItem'

const CartItem = () => {
    const [quantity, setQuantity] = useState<number>(0)

    const handleIncrement = () => {
        if (quantity >= 5) {
           return
        }
        setQuantity(prev => prev + 1)
    }
    const handleDecrement = () => {
        if (quantity <= 1) {
            return
        }
        setQuantity(prev => prev - 1)
    }
    const handleInput: React.ChangeEventHandler<HTMLInputElement>  = (event) => {
        setQuantity(+event.target.value)
    }
 
    return (
        <Card>
            <>
            <span><img src={burger} /></span>
            <span>
                <h3>{'Carlifornia'}</h3>
                <p className={classes.amount}>${7.99}</p>
            </span>
            <span className={classes.controls}>
                    <span onClick={handleDecrement} >-</span>
                    <input placeholder="1" value={quantity} onChange={ handleInput}/>
                    <span onClick={handleIncrement}>+</span>
                </span>
                </>
        </Card>
    )
}

export default CartItem
