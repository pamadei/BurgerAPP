import React from 'react'
import style from './BuilderControls.module.css'
import BuildControl from './BuildControl/BuildControl'

const BuilderCotrols = props => {

  const ingredientTransform = Object.keys(props.ingredients)
    .map(igKey => 
    <BuildControl 
    key={igKey}
    addIngredient={()=> props.addIngredient(igKey)}
    removeIngredient={()=> props.removeIngredient(igKey)}
    disabled={props.disabled[igKey]}
    >{igKey}
    </BuildControl>)

  return (
    <div className={style.Main}>
    <p className={style.Price}>Current Price : {props.totalPrice.toFixed(2)}</p>
    {ingredientTransform}
    <button 
    onClick={props.ordered} 
    className={style.ButtonOrder} 
    disabled = {!props.purchasable}
    >Order Now</button>
    </div>
  )
}

export default BuilderCotrols
