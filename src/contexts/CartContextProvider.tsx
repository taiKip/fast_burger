import { ReactNode, useState } from 'react'
import { ICartItem } from '../interfaces/ICartItem'
import CartContext from './CartContext'
const CartContextProvider = ({ children }: { children: ReactNode }) => {
    const[state,setState]=useState<ICartItem[]>([])
    const handleAddBurger = (burger:ICartItem) => {
    setState([burger,...state])
    }
    console.log(state)
    return (
        <CartContext.Provider value={{items:state,updateItems:handleAddBurger}} >
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider
