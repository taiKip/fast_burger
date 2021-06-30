import { useReducer } from 'react'
import { ReactNode } from 'react'
import { IState } from '../interfaces/IState'
import { cartReducer } from '../reducers/cartReducer'
import CartContext from './CartContext'
const innitialState: IState= {
    items: [],
    totalAmount: 0
}

const CartContextProvider = ({ children }: { children: ReactNode }) => {
    const [state, dispatch] = useReducer(cartReducer, innitialState)
    
   
    return (
        <CartContext.Provider value={{state,dispatch}} >
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider
