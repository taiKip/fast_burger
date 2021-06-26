import React from 'react'
import burger from '../../assets/burger_image.png'
import { IBurger } from '../../interfaces/IBurger'

import MenuItem from './MenuItem'
import ListCard from '../../UI/Card/ListCard'
const Burger:IBurger[] = [
    { id: 1, name: "Beef Burger", description: "Beef patty,Onions,Tomatoes,Pickles,Lettuce,Ketchup,Mayo,Mustard", price: 7.99, image: burger },
    { id: 2, name: "Cheese Burger", description: "Beef patty,Chedder Cheese,Grilled Onions,Tomatoes,Pickles,Lettuce,Ketchup,Mayo,Mustard", price: 8.99, image: burger },
    { id: 3, name: "Beef Bacon", description: "Beef patty,Chedder Cheese,Beef Bacon,Grilled Onions,Tomatoes,Pickles,Lettuce,Ketchup,Mayo,Mustard", price: 9.99, image: burger },
    { id: 2, name: "Hawaian Burger", description: "Beef patty,Grilled Pineapple,Mozza cheese,Onions,Lettuce,Mayo,BBQ sauce", price: 6.99, image: burger }
]
const Menu = () => {
    return (
        <ListCard>
            {Burger.map(burger => <MenuItem item={burger }/>)}
        </ListCard>
    )
}

export default Menu
