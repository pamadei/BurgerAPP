import React from 'react'
import style from './Order.module.css'

const Order = props => {

  return (
    <li className={style.Order}>
      {props.ingredientsSummary}
      <span>---</span> 
      <p>Total Price: {props.order.totalPrice}</p>
      <p>Customer Name: {props.order.customer.name} {props.order.customer.lastName}</p>
    </li>
    )
}
 

export default Order
