import React, { ReactChild, ReactElement, ReactNode } from 'react'
import classes from './Modal.module.css'
const Modal = ({children}:{children:ReactNode}) => {
    return (
        <>
            <div className={classes["back-drop"]}>
                <div className={classes.header}>
                    <div className={classes["back-button"]}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <div>
                        <h1>Cart</h1>
                    </div>          
                </div>
               
            </div>
            <div className={classes.modal}>
                {children}
              
            </div>
        </>
    )
}

export default Modal
