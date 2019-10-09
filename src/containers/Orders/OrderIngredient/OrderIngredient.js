import React from 'react'

const OrderIngredient = props => 
<p>{props.ingredient.replace(/\b\w/g, l => l.toUpperCase())}: {props.ingQuantity}</p>

export default OrderIngredient
