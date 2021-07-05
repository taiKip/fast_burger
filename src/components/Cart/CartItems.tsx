import CartItem from "./CartItem";
import classes from "./CartItems.module.css";
import ListCard from "../../UI/Card/ListCard";
import { useContext, useState } from "react";
import CartContext from "../../contexts/CartContext";
import CheckoutForm from "./CheckoutForm/CheckoutForm";
import { ICustomer } from "../../interfaces/ICustomer";
import { ISubmit } from "../../interfaces/ISubmit";
const CartItems = () => {
  const { state,dispatch } = useContext(CartContext);
  const [checkout, setCheckout] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(true);
  const [submitError, setSubmitError] = useState(false);
  let cartHeader = <p>Selected Items,double click on item name to delete</p>;
  if (state.items.length === 0) {
    cartHeader = <p>you currently have no items in your cart </p>;
  } else if (checkout === true) {
    cartHeader = <p>Please enter your details</p>;
  }
  const subTotal = state.items.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);
  const delivery = subTotal * 0.1;
  const total = subTotal + delivery;

  const handleCheckout = () => {
    setCheckout((prev) => !prev);
  };
  const handlesubmitOrder = (userDetails: ICustomer) => {
    setIsSubmitting(true);
    fetch("https://happy-meals-bbca2-default-rtdb.firebaseio.com/orders.json", {
      method: "POST",
      body: JSON.stringify({
        user: userDetails,
        orderedItems: state.items,
      }),
    })
      .then((res) => {
        if (!res.ok) {
          setIsSubmitting(false);
          throw Error("something went wrong");
        } else {
          setIsSubmitting(false);
          setSubmitted(true);
          dispatch({type:"reset"})
        }
      })
      .catch((error) => setSubmitError(true));
  };
  const status: ISubmit = {
    isSubmiting: isSubmitting,
    submitted: submitted,
    submitError: submitError,
  };
  return (
    <div className={classes["cart-items"]}>
      <ListCard>
        {!submitted&&<span className={classes["cart-header-text"]}>{cartHeader} </span>}
        {checkout && (
          <CheckoutForm
            toggle={handleCheckout}
            handleSubmit={handlesubmitOrder}
            total={total}
            submitStatus={status}
          />
        )}

        {!checkout &&
          state.items.map((_item) => <CartItem key={_item.id} item={_item} />)}
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
            disabled={total ? false : true}
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
