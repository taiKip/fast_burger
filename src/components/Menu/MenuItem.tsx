import React from 'react'
import { IBurger } from '../../interfaces/IBurger'
import classes from './MenuItem.module.css'
import InputForm from './InputForm'
import Card from '../../UI/Card/Card'
import { useContext } from 'react'
import CartContext from '../../contexts/CartContext'
import { ICartItem } from '../../interfaces/ICartItem'
const MenuItem = ({ item }: { item: IBurger }) => {
    const {items,updateItems} =useContext(CartContext)
    const handleAddBurger = (quantity:number) => {
        console.log(quantity + " " + item.name)
        const newCartItem: ICartItem={
            ...item,quantity:quantity
        }
     
       
        updateItems(newCartItem)
    }
    return (
        <Card>
            <>
            <span>
                <img src={item.image} alt="delicious burger"/>
            </span>
            <span className={classes.description}>
                <h3>{item.name} </h3>
            </span>
            <span>
                    <InputForm handleAddBurger={handleAddBurger}/>
                </span>
                </>
        </Card>
    )
}

export default MenuItem
