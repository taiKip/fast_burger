
import cover from '../../assets/burger_cover.jpg'
import classes from './Header.module.css'
const Header = () => {
    return (
        <div className={classes.header}>
            <img src={cover} alt="a tasty burger and fries on the side"/>
        </div>
    )
}

export default Header
