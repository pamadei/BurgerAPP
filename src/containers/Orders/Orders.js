import React, { Component, Fragment } from 'react';
import axios from 'axios';
import style from './Orders.module.css'
import Order from './Order/Order'


class Orders extends Component {

  state = {
    orders : [],
    loadedOrder: false
  }

  componentDidMount() {
    axios.get('http://localhost:5000/api/orders')
      .then(res => this.setState({orders:res.data}))
  }


  render() {
  let orders = <div>Loading Orders</div>
    if(this.state.orders.length > 1){
    let ingredientsSummary = this.state.orders
      .map((order,i) => Object.keys(order.ingredients)
      .map(igKey => [...Array(order.ingredients[igKey[i]]).keys()]
      .map((_, i) => 
        <Order 
        key={Math.floor(Math.random()*1000)+i}
        ingredient={igKey}
        ingQuantity={order.ingredients[igKey]}
        />)));

    orders = (
      <ul className={style.Orders}>
        {this.state.orders.map((order,i) =>
        <li className={style.Order} key={order._id}>
        {ingredientsSummary[i]}
        <span>---</span> 
        <p>Total Price: {order.totalPrice}</p></li>
        )}
      </ul>
    )
  }
      return (
      <Fragment>
        <p style={{textAlign:"center"}}>You have Orders:</p>
        {orders}
      </Fragment>
    )
  }
}

export default Orders