import React from 'react'
import style from './Order.module.css'

const Order = props => {

  return (
    <li className={style.Order}>
      Ingredients: {props.ingredientsSummary}
      <p>Price: £<span style={{fontWeight:'bold'}}>{props.order.totalPrice}</span>
      </p>
      <p>Customer Name: {props.order.customer.name} {props.order.customer.lastName}</p>
    </li>
    )
}
 

export default Order
