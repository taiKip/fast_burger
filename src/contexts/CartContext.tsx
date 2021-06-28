import { createContext } from "react";
import { ICartItem } from "../interfaces/ICartItem";


export interface IDefault {
    items: ICartItem[];
    updateItems: (item: ICartItem) => void;
}
const CartContext = createContext<IDefault>({
    items: [],
    updateItems:(item:ICartItem)=>{}
})


export default CartContext;