import React from 'react'
import classes from './InputForm.module.css'
const InputForm = () => {
    return (
        <form className={classes.form}>
            <select>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
            </select>
            <button>Add</button>
        </form>
    )
}

export default InputForm
