import React from 'react'
import classes from './ProgressBar.module.css'
const ProgressBar = () => {
    return (
        <div className={classes.progress}>
            <span className={classes['progress-bar']}></span>
        </div>
    )
}

export default ProgressBar
