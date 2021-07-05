
import { useState,useEffect } from 'react'
import { Blurhash } from 'react-blurhash'
import { IHeader } from '../../interfaces/IHeader'
import classes from './Header.module.css'
const Header = () => {
    const[headerImage,setHeaderImage] = useState<IHeader|null>(null)
    const [loaded, setLoaded] = useState(false)
    
    const style = !loaded ? classes.hide : "";
    const handleOnload = () => {
       setLoaded(true)
    }
    useEffect(() => {
        fetch("https://happy-meals-bbca2-default-rtdb.firebaseio.com/appdata/images/headerimage.json").then(res=>res.json()).then(data=>setHeaderImage(data))
       
    }, [])
    const defaultHash ="L3Fg~{0001cu?H}702Br0=#6}k.8"
    return (
        <div className={classes.header}>
        
            {!loaded &&<Blurhash
                hash={typeof headerImage?.hash === 'string' ? headerImage.hash :defaultHash}
                width={1200}
                height={300}
                resolutionX={32}
                resolutionY={32}
                />
            }
            <img src={headerImage?.src} className={style} onLoad={ handleOnload} alt="delicious food"/>
        
            
        </div>
    )
}

export default Header
