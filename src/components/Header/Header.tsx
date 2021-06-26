import React from 'react'
import cover from '../../assets/burger_cover.jpg'
import classes from './Header.module.css'
const Header = () => {
    return (
        <div className={classes.header}>
            <img src={cover}/>
        </div>
    )
}

export default Header
