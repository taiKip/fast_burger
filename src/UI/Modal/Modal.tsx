import  {  ReactNode } from 'react'
import classes from './Modal.module.css'
const Modal = ({ children, onClose, name, show }: { children: ReactNode, onClose: () => void, name: string, show: boolean }) => {
    let modalStyles = classes.modal
    return (
        <>
            <div className={classes["back-drop"]} onClick={onClose}>
                <div className={classes.header}>
                    <div className={classes["back-button"]}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <div>
                        <h1>{name}</h1>
                    </div>          
                </div>
               
            </div>
            <div className={modalStyles}>
                {children}
              
            </div>
        </>
    )
}

export default Modal
