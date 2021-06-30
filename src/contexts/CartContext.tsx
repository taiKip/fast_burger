import  { createContext, Dispatch } from "react";
import { IState } from "../interfaces/IState";
import { ACTIONS } from "../Types/actionsType";

const innitialState = {
    items: [],
    totalAmount: 0
}

const CartContext = createContext<{ state: IState, dispatch: Dispatch<ACTIONS> }>({
    state: innitialState,
    dispatch:(actions:ACTIONS)=>{}
})
  
     
   


export default CartContext;