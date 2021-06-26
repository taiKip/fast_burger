import React, { ReactNode } from 'react'
import classes from './ListCard.module.css'
const ListCard = ({children}:{children:ReactNode}) => {
    return (
        <ul className={classes["item-list"]}>
            {children}
        </ul>
    )
}

export default ListCard
