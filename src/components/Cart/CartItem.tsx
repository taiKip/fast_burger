
import classes from './CartItem.module.css'
import burger from '../../assets/burger_image.png'
import { ICartItem } from '../../interfaces/ICartItem'
import React, { useContext } from 'react'
import CartContext from '../../contexts/CartContext'
import Card from '../../UI/Card/Card'


const CartItem = ({ item }: { item: ICartItem }) => {
  
    const { dispatch } = useContext(CartContext)
    const handleIncrement = () => {
        dispatch({ type: "increment", payload: item.id })
      
    }
    const handleDecrement = () => {
        dispatch({ type: "decrement", payload: item.id })
    
    }
    const handleInput: React.ChangeEventHandler<HTMLInputElement> = (event) => {
        event.preventDefault()
        let item_copy:ICartItem = { ...item,quantity:+event.target.value}
        item = item_copy;
        dispatch({ type: 'add', payload: item })
       
    }
    
    const handleDelete = (event:React.MouseEvent<HTMLElement>) => {
        dispatch({ type: "delete", payload: item.id })
   
        
    }

    return (
        <Card  >
           <>
                <span onDoubleClick={handleDelete}><img src={burger}  alt ="a delicious burger"/></span>
            <span onDoubleClick={handleDelete}>
                    <h3>{item.name}</h3>
                    <p className={classes.amount}>€ {item.price * item.quantity}</p>
                </span>
                <span className={classes.controls}>
                    <button onClick={handleDecrement} className={classes.button}>-</button>
                    <input placeholder="1" value={item.quantity} onChange={handleInput} />
                    <button onClick={handleIncrement} className={classes.button}>+</button>
                </span>
        </>
        </Card>
    )
}

export default CartItem
