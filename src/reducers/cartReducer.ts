import { IState } from './../interfaces/IState';
import { ICartItem } from './../interfaces/ICartItem';
type ACTIONS = { type: "add"; payload: ICartItem }
    | { type: "increment"; payload: number }
    | { type: "decrement"; payload: number }
    | { type: "delete"; payload: number };


export const cartReducer = (state: IState, action: ACTIONS)=>{

    switch (action.type) {
        case 'add':
            const updatedAmount = action.payload.price * action.payload.quantity + state.totalAmount;
            let updatedState: IState = {
                items: [action.payload, ...state.items],
                totalAmount: updatedAmount
            }
            state = updatedState;
            return state;
        default:
            return state


    }


}