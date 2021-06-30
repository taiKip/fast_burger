
import { ChangeEvent } from 'react'
import { useState } from 'react'
import classes from './InputForm.module.css'
const InputForm = ({ handleAddBurger: handleAddBurgerQuantity = (quantity: number) => {} }) => {
    const [quantity, setQuantity] = useState(1)
    const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
        setQuantity(+event.target.value)
        
    }

    const handleSubmit = (event:React.FormEvent ) => {
        event.preventDefault()
        //lift quantity state up to menuitem.
        handleAddBurgerQuantity(quantity)
     
    }
   
    return (
        <form className={classes.form} onSubmit={handleSubmit}>
            <select defaultValue="1" onChange={handleChange}>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
            </select>
            <button type="submit">Add</button>
        </form>
    )
}

export default InputForm
