import { ICartItem } from './../interfaces/ICartItem';
export type ACTIONS =
  | { type: "add"; payload: ICartItem}
  | { type: "increment"; payload: number }
  | { type: "decrement"; payload: number }
  | { type: "delete"; payload: number };