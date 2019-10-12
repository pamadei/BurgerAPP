import React from 'react'
import style from './Order.module.css'
import {format} from 'date-fns'

const Order = props => {

  return (
    <li className={style.Order}>
      <p>Order: {props.order.orderNumber}</p>
      <p>Date: {format(new Date(props.order.date), "yyyy-MM-dd' - 'HH:mm aaaa")
}</p>
      Ingredients: {props.ingredientsSummary}
      <p>Price: £<span style={{fontWeight:'bold'}}>{props.order.totalPrice.toFixed(2)}</span>
      </p>
      <p>Customer Name: {props.order.customer.name} {props.order.customer.lastName}</p>
    </li>
    )
}
 

export default Order
