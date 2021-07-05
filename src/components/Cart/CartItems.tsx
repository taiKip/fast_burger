import CartItem from "./CartItem";
import classes from "./CartItems.module.css";
import ListCard from "../../UI/Card/ListCard";
import { useContext, useState } from "react";
import CartContext from "../../contexts/CartContext";
import CheckoutForm from "./CheckoutForm/CheckoutForm";
const CartItems = () => {
  const { state } = useContext(CartContext);
  const [checkout, setCheckout] = useState(false);
  let cartHeader = "Selected Items,double click on item name to delete";
  if (state.items.length === 0) {
    cartHeader = `you currently have no items in your cart :)`;
  } else if(checkout===true){
    cartHeader="Please enter your details"
  }
  const subTotal = state.items.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);
  const delivery = subTotal * 0.1;
  const total = subTotal + delivery;

  const handleCheckout = () => {
    setCheckout((prev) => !prev);
  };

  return (
    <div className={classes["cart-items"]}>
      <ListCard>
        {<span className={classes["cart-header-text"]}>{cartHeader}</span>}
        {checkout && (
          <>
          
            <CheckoutForm toggle={handleCheckout}/>
            total :€ {total.toFixed(2)}
          </>
        )}
              {!checkout &&
                  
          state.items.map((_item) => <CartItem key={_item.id} item={_item} />)
              }
              <div className={classes["checkout-controls"]}>
                  <div>
                      <span>Subtotal</span>
                      <span>€{subTotal.toFixed(2)}</span>
                  </div>
                  <div>
                      <span>Delivery</span>
                      <span>€{delivery.toFixed(2)}</span>
                  </div>
                  <div>
                      <span>Total</span>
                      <span>€{total.toFixed(2)}</span>
                  </div>
          <button
            disabled={total?false:true}
                      className={classes["checkout-button"]}
                      onClick={handleCheckout}>
                      Checkout
                  </button>
              </div>
      </ListCard>
     
    </div>
  );
};

export default CartItems;
