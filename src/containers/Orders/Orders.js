import React, { Component, Fragment } from 'react';
import axios from '../../axios-orders';
import style from './Orders.module.css'
import OrderIngredient from './OrderIngredient/OrderIngredient'
import {Link} from 'react-router-dom'
import Order from './Order/Order'


class Orders extends Component {

  state = {
    orders : [],
    loadedOrder: false
  }

  componentDidMount() {
    axios.get('/api/orders')
      .then(res => this.setState({orders:res.data}))
  }


  render() {
  this.orders = <div style={{textAlign:"center"}}>No Orders at the moment.</div>
    if(this.state.orders.length > 0){
    let ingredientsSummary = this.state.orders
      .map((order,i) => Object.keys(order.ingredients)
      .map(igKey => [...Array(order.ingredients[igKey[i]]).keys()]
      .map((_, i) => 
        <OrderIngredient 
        key={Math.floor(Math.random()*1000)+i}
        ingredient={igKey}
        ingQuantity={order.ingredients[igKey]}
        />)));

    this.orders = (
      <ul className={style.Orders}>
        {this.state.orders.map((order,i) => 
          <Link 
          to={this.props.match.url + '/' +  order._id}
          className={style.Link}
          key={order._id}
          >
          <Order 
          order={order}
          ingredientsSummary = {ingredientsSummary[i]}
          />
          </Link>
        )}
      </ul>
    )
  }
      return (
      <Fragment>
        <p style={{textAlign:"center"}}>Your Orders:</p>
        {this.orders}
      </Fragment>
    )
  }
}

export default Orders