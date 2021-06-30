import { ICartItem } from "./../interfaces/ICartItem";
import { ACTIONS } from "./../Types/actionsType";
import { IState } from "./../interfaces/IState";

export const cartReducer = (state: IState, action: ACTIONS) => {
  let updateItem: ICartItem;
  let state_items_copy: ICartItem[];
  let updatedState: IState;
  let updatedAmount: number;
  let item_exists_index: number;
  let existing_cartItem: ICartItem;
  switch (action.type) {
    case "add":
      updatedAmount =
        action.payload.price * action.payload.quantity + state.totalAmount;

      //find out if item exists...increase count
      item_exists_index = state.items.findIndex(
        (item) => action.payload.id === item.id
      );
      existing_cartItem = state.items[item_exists_index];

      if (existing_cartItem) {
        updateItem = {
          ...existing_cartItem,
          quantity: existing_cartItem.quantity + action.payload.quantity,
        };
        state_items_copy = [...state.items];
        state_items_copy[item_exists_index] = updateItem;
        updatedState = {
          items: [...state_items_copy],
          totalAmount: updatedAmount,
        };

        state = updatedState;
        return state;
      } else {
        //if item doesnt exist in array
        updatedState = {
          items: [action.payload, ...state.items],
          totalAmount: updatedAmount,
        };
        console.log("new item added");
        state = updatedState;
      }
      return state;

    case "increment":
      item_exists_index = state.items.findIndex(
        (item) => item.id === action.payload
      );
      state_items_copy = [...state.items];
      existing_cartItem = state_items_copy[item_exists_index];
      updatedAmount = state.totalAmount + existing_cartItem.price;
      updateItem = {
        ...existing_cartItem,
        quantity: existing_cartItem.quantity + 1,
      };
      state_items_copy[item_exists_index] = updateItem;
      updatedState = {
        items: [...state_items_copy],
        totalAmount: updatedAmount,
      };
      state = updatedState;
      return state;
    case "decrement":
      item_exists_index = state.items.findIndex(
        (item) => item.id === action.payload
      );
      state_items_copy = [...state.items];
      existing_cartItem = state_items_copy[item_exists_index];
      if (existing_cartItem.quantity > 1) {
        updatedAmount = state.totalAmount - existing_cartItem.price;
        updateItem = {
          ...existing_cartItem,
          quantity: existing_cartItem.quantity - 1,
        };
        state_items_copy[item_exists_index] = updateItem;
        updatedState = {
          items: [...state_items_copy],
          totalAmount: updatedAmount,
        };
        state = updatedState;
      } else {
        state_items_copy.splice(item_exists_index, 1);
        updatedAmount = state.totalAmount - existing_cartItem.price;
        updatedState = {
          items: [...state_items_copy],
          totalAmount: updatedAmount,
        };
        state = updatedState;
      }
      return state;
    case "delete":
      item_exists_index = state.items.findIndex(
        (item) => item.id === action.payload
          );
    updatedState={...state}
      state_items_copy = [...state.items];
          state.items.splice(item_exists_index, 1);
          updatedState = {
                ...state,
              items: [...state_items_copy]
             
            };
      state = updatedState;
      return state;
    default:
      return state;
  }
};
