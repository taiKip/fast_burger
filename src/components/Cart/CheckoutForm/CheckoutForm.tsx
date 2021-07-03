import classes  from './CheckoutForm.module.css'
const CheckoutForm = () => {
    return (
        <>
        <form className={classes.form}>
            <div>
                <label htmlFor="name">Your Name</label>
                <input type="text" id='name' required/>
            </div>
            <div>
                <label htmlFor="name">Street Address</label>
                <input type="text" id='name' required/>
            </div>
            <div>
                <label htmlFor="name">Appartment Number</label>
                <input type="text" id='name' placeholder="B 23" required/>
            </div>
            <div>
                <label htmlFor="phone">Phone Number</label>
                <input type="tel" id='phone' placeholder="+3585824224" required/>
            </div>
            <div className={classes.controls}>
                <button>confirm</button>
                <button>cancel</button>
            </div>
            </form>
        </>
    )
}

export default CheckoutForm
