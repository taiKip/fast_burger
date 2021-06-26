import React from 'react'
import { IBurger } from '../../interfaces/IBurger'
import classes from './MenuItem.module.css'
import InputForm from './InputForm'
import Card from '../../UI/Card/Card'
const MenuItem = ({ item }: { item: IBurger }) => {
    return (
        <Card>
            <>
            <span>
                <img src={item.image} />
            </span>
            <span className={classes.description}>
                <h3>{item.name} </h3>
            </span>
            <span>
                <InputForm />
                </span>
                </>
        </Card>
    )
}

export default MenuItem
