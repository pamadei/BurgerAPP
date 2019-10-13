import React from 'react'
import BurgerIngredient from './BurgerIngredient/BurgerIngredient'
import style from './Burger.module.css'

const Burger = props => {
 
  const transformedIngredients = Object.keys(props.ingredients)
    .map(igKey => [...Array(props.ingredients[igKey])]
        .map((_, i)=> <BurgerIngredient key={igKey + i} type={igKey} />
      )
    )
  return (
    <div className={style.Burger}>
      <BurgerIngredient type='bread-top'/>
      {props.sum !== 0 ? transformedIngredients : <p>Start building your Burger</p>}
      <BurgerIngredient type='bread-bottom'/>
    </div>
  )
}


export default Burger;
