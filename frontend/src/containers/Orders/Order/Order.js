import React from 'react'
import style from './Order.module.css'
import {format} from 'date-fns'

const Order = props => {

  return (
    <li className={style.Order}>
      <p>Order #{props.order.orderNumber}</p>
      <p>Date: {format(new Date(props.order.date), "dd-MM-yyyy' - 'HH:mm")
}</p>
      Ingredients:{props.ingredientsSummary}
      <p>Price: <span style={{fontWeight:'bold'}}>£{props.order.totalPrice.toFixed(2)}</span>
      </p>
      <p>Customer: {props.order.customer.name} {props.order.customer.lastName}</p>
    </li>
    )
}
 

export default Order
