import { IBurger } from '../../interfaces/IBurger'
import MenuItem from './MenuItem'
import ListCard from '../../UI/Card/ListCard'
import { useState, useEffect } from 'react'
import ProgressBar from '../../UI/progressBar/ProgressBar'
import CartButton from '../Cart/CartButton'
const Menu = ({toggle}:{toggle:()=>void}) => {
    const [meals, setMeals] = useState<IBurger[]>([])
    const [loading, setLoading] = useState(true)
    const[error,setError] = useState(null)
   

    useEffect(() => {
        fetch("https://happy-meals-bbca2-default-rtdb.firebaseio.com/meals.json").then(res => {
            setLoading(true)
            if (!res.ok) {
                setLoading(false)
                throw Error("Oops something went wrong...")
                
          }
            return res.json()
        }).then(data => {
            setLoading(false)
            const meals: IBurger[] = []
            for (const key in data) {
                meals.push({
                    id: key,
                    name: data[key].name,
                    description: data[key].description,
                    image:data[key].image ,
                    price: data[key].price
                })
            }
            setMeals(meals)
        }).catch(error =>setError(error.message))
    }, [])
    const handleClick = () => {
      toggle()
  }
    return (
        <ListCard>
            {loading&&<ProgressBar/>}
            {error && <p>{error}</p>}
           
            {meals && meals.map(burger => <MenuItem key={burger.id} item={burger} />)}
            <CartButton onClick={handleClick} />
        </ListCard>
    )
}

export default Menu
