import { IBurger } from '../../interfaces/IBurger'
import MenuItem from './MenuItem'
import ListCard from '../../UI/Card/ListCard'
import { useState, useEffect } from 'react'
import ProgressBar from '../../UI/progressBar/ProgressBar'
import CartButton from '../Cart/CartButton'
import SkeletonItem from '../Skeletons/SkeletonItem'
import firebase from '../../data/firebase'
const Menu = ({toggle}:{toggle:()=>void}) => {
    const [meals, setMeals] = useState<IBurger[]>([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<string|null>(null)
    
    const db = firebase.firestore() //initialize database
  

    useEffect(() => {
      
        setLoading(true);
        db.collection("meals").onSnapshot(querySnapshot => {
            const meals: IBurger[] = [];
            if (querySnapshot.empty) {
                return
            }
            querySnapshot.forEach(doc => {

                if (doc.data()) {
                    meals.push({
                        id: doc.id,
                        name: doc.data().name,
                        description: doc.data().description,
                        image: doc.data().image,
                        price: doc.data().price
                    })
                }
            })
            setMeals(meals)
            setLoading(false)
            setError(null)
        }, error => {
            setError(error.message)
        })


      
    }, [])
    const handleClick = () => {
      toggle()
  }
    return (
        <ListCard>
            {loading &&
                <>
                <ProgressBar />
                {[1, 2, 3, 4].map(item => <SkeletonItem key={item}/>)}
                </>}
            {error && <p>{error}</p>}
           
            {meals && meals.map(burger => <MenuItem key={burger.id} item={burger} />)}
            <CartButton onClick={handleClick} />
        </ListCard>
    )
}

export default Menu
