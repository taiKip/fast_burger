import { ICartItem } from './../interfaces/ICartItem';
export type ACTIONS =
  | { type: "add"; payload: ICartItem}
  | { type: "increment"; payload: string }
  | { type: "decrement"; payload: string }
  | { type: "delete"; payload: string };