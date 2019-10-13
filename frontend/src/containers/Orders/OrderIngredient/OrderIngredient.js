import React from 'react'

const OrderIngredient = props => {
  return (
    <span style={{marginLeft:'0.5rem', textTransform:'capitalize'}}>
    {props.ingredient} ({props.ingQuantity})
    </span>
  )
}

export default OrderIngredient
