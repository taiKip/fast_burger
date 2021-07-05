
import { useState } from 'react'
import { Blurhash } from 'react-blurhash'
import classes from './Header.module.css'
const Header = () => {
    const [loaded, setLoaded] = useState(false)
    const style = !loaded ? classes.hide : "";
    const handleOnload = () => {
       setLoaded(true)
    }
 
    return (
        <div className={classes.header}>
        
            {!loaded &&<Blurhash
                hash="L3Fg~{0001cu?H}702Br0=#6}k.8"
                width={1200}
                height={300}
                resolutionX={32}
                resolutionY={32}
                />
            }
            <img src="https://burgerapp-photo-bucket.s3.eu-north-1.amazonaws.com/burger_cover.jpg" className={style} onLoad={ handleOnload} alt="delicious food"/>
        
            
        </div>
    )
}

export default Header
