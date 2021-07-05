import { FormEvent,useRef } from 'react'
import classes from './CheckoutForm.module.css'
const phoneRegex = /^\+(?:[0-9] ?){6,14}[0-9]$/;
const CheckoutForm = ({ toggle }: { toggle: () => void }) => {
    const nameRef = useRef<HTMLInputElement>(null)
    const streetRef = useRef<HTMLInputElement>(null)
    const aptRef = useRef<HTMLInputElement>(null)
    const phoneRef = useRef<HTMLInputElement>(null)
    const formRef = useRef<HTMLFormElement>(null)
    const handleCheckout = (event: FormEvent) => {
        event.preventDefault();
        const name = nameRef.current?.value;
        const street = streetRef.current?.value;
        const apartment = aptRef.current?.value;
        const phonNumber = phoneRef.current?.value;
      
        if (name?.trim() === '') {
            return;
        }
        if (street?.trim() === '') {
            return;
        }
        if (apartment?.trim() === '') {
            return;
        }
        if (phonNumber?.trim() === '') {
            return;
        }
        if (typeof (phonNumber) === "string") {
            if (phoneRegex.test(phonNumber)!==true) {
                return;
            }
            
}
      
        const customer = {
            name: name,
            streetName: street,
            apartment: apartment,
            phone:phonNumber
        }
        console.log(customer)
        formRef.current?.reset()
       
    }
    return (
        <>
        <form className={classes.form} onSubmit={handleCheckout} ref={formRef}>
            <div>
                <label htmlFor="name">Your Name</label>
                    <input type="text" id='name' required ref={nameRef}/>
            </div>
            <div>
                <label htmlFor="name">Street Address</label>
                    <input type="text" id='name' required ref={streetRef}/>
            </div>
            <div>
                <label htmlFor="name">Appartment Number</label>
                    <input type="text" id='name' placeholder="B 23" required ref={aptRef}/>
            </div>
            <div>
                <label htmlFor="phone">Phone Number</label>
                    <input type="tel" id='phone' placeholder="+3585824224" required ref={phoneRef}/>
            </div>
                <div className={classes.controls}>
                    <button onClick={toggle}>cancel</button>
                <button>confirm</button>
                   
            </div>
            </form>
        </>
    )
}

export default CheckoutForm
