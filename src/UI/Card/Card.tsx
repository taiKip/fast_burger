import React, { ReactElement } from 'react'
import classes from './Card.module.css'
const Card = ({children}:{children:ReactElement}) => {
    return (
        <li className={classes.item}>
            {children}
        </li>
    )
}

export default Card
