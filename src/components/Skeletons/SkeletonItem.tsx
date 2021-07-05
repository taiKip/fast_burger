import React from 'react'
import classes from './Skeleton.module.css'
import Shimmer from './Shimmer'
const SkeletonItem = () => {
    return (
        <li className={classes["skeleton-wrapper"]}>
            <Shimmer/>
        </li>
    )
}

export default SkeletonItem
