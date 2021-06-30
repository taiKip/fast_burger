import { ICartItem } from "./../interfaces/ICartItem";
import { ACTIONS } from "./../Types/actionsType";
import { IState } from "./../interfaces/IState";

export const cartReducer = (state: IState, action: ACTIONS) => {
  if (action.type === "add") {
    const updatedAmount =
      action.payload.price * action.payload.quantity + state.totalAmount;

    //find out if item exists...increase count
    const item_exists_index = state.items.findIndex(
      (item) => action.payload.id === item.id
    );
    const existing_cartItem = state.items[item_exists_index];
      let updateItem: ICartItem;
      let updatedItems: ICartItem[];
    let updatedState: IState;
    if (existing_cartItem) {
      updateItem = {
        ...existing_cartItem,
        quantity: existing_cartItem.quantity + action.payload.quantity,
        };
        updatedItems = [...state.items]
      updatedItems[item_exists_index] = updateItem;
      updatedState = {
        items:[...state.items],
        totalAmount: updatedAmount,
      };

        state = updatedState;
     return state;
    } else {
      //if item doesnt exist in array
      let newState = {
        items: [action.payload, ...state.items],
        totalAmount: updatedAmount,
      };
      console.log("new item added");
      state = newState;
    }
    return state;
  } else if (action.type === "increment") {
    const item_index = state.items.findIndex(
      (item) => item.id === action.payload
    );
    const existing_cartItem = state.items[item_index];
    let updateItem: ICartItem;
    let updateState: IState;
    let updateAmount = state.totalAmount + existing_cartItem.price;
    updateItem = {
      ...existing_cartItem,
      quantity: existing_cartItem.quantity + 1,
    };
    
    updateState = {
      ...state,
      totalAmount: updateAmount,
    };
    state = updateState;

    return state;
  } else {
    return state;
  }
};
