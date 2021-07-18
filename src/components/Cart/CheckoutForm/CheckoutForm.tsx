import { FormEvent, useRef, useState } from "react";
import { ICustomer } from "../../../interfaces/ICustomer";
import { ISubmit } from "../../../interfaces/ISubmit";
import ProgressBar from "../../../UI/progressBar/ProgressBar";
import classes from "./CheckoutForm.module.css";
import OrderConfirmed from "./OrderConfirmed";
const phoneRegex = /^(\+\d{0})?(?:[0-9] ?){6,14}[0-9]$/;
const CheckoutForm = ({ toggle,handleSubmit,total,submitStatus }: { toggle: () => void,handleSubmit:(user:ICustomer)=>void,total:number ,submitStatus:ISubmit}) => {
    const [formIsInValid, setFormIsValid] = useState(true);
    
  const nameRef = useRef<HTMLInputElement>(null);
  const streetRef = useRef<HTMLInputElement>(null);
  const aptRef = useRef<HTMLInputElement>(null);
  const phoneRef = useRef<HTMLInputElement>(null);
  const formRef = useRef<HTMLFormElement>(null);

   
  const handleCheckout = (event: FormEvent) => {
    event.preventDefault();
    const name = nameRef.current?.value;
    const street = streetRef.current?.value;
    const apartment = aptRef.current?.value;
    const phonNumber = phoneRef.current?.value;

      if (name?.trim() === "") {
        setFormIsValid(false)
      return;
    }
      if (street?.trim() === "") {
          setFormIsValid(false)
      return;
    }
      if (apartment?.trim() === "") {
          setFormIsValid(false)
      return;
    }
      if (phonNumber?.trim() === "") {
          setFormIsValid(false)
      return;
      } else if (typeof phonNumber === "string" && !phoneRegex.test(phonNumber)) {
          setFormIsValid(false)
      return;
    }

    const customer:ICustomer = {
      name: name,
      streetAddress: street,
      apartmentNumber: apartment,
      phoneNumber: phonNumber,
    };
      handleSubmit(customer)
      if (submitStatus.submitError) {
          return;
      }
      if (!submitStatus.submitError) {
          formRef.current?.reset();
      }
    
  };
  return (
    <>
          {(!formIsInValid) && <p style={{ color: 'salmon' }}>Please Re-check your details</p>}
          {submitStatus.isSubmiting && <ProgressBar />}
          {submitStatus.submitError&&<p>Something went wrong :(</p>}
          {submitStatus.submitted ? <OrderConfirmed />:<form className={classes.form} onSubmit={handleCheckout} ref={formRef}>
              <div>
                  <label htmlFor="name">Your Name</label>
                  <input type="text" id="name" required ref={nameRef} />
              </div>
              <div>
                  <label htmlFor="address">Street Address</label>
                  <input type="text" id="address" required ref={streetRef} />
              </div>
              <div>
                  <label htmlFor="appartment">Appartment Number</label>
                  <input
                      type="text"
                      id="appartment"
                      placeholder="B 23"
                      required
                      ref={aptRef}
                  />
              </div>
              <div>
                  <label htmlFor="phone">Phone Number</label>
                  <input
                      type="tel"
                      id="phone"
                      placeholder="+3585824224"
                      required
                      ref={phoneRef}
                  />
              </div>
              <div className={classes.controls}>
                  <button onClick={toggle}>cancel</button>
                  <button>confirm</button>
              </div>
              <p>total : {total.toFixed(2)}</p>
          </form>}
    </>
  );
};

export default CheckoutForm;
