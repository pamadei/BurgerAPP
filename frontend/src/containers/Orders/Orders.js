import React, { Component, Fragment } from 'react';
import axios from '../../axios-orders';
import style from './Orders.module.css'
import OrderIngredient from './OrderIngredient/OrderIngredient'
import {Link} from 'react-router-dom'
import Order from './Order/Order'
import Spinner from '../../components/UI/Spinner/Spinner'


class Orders extends Component {

  state = {
    orders : [],
  }

  componentDidMount() {
    axios.get('/api/orders')
      .then(res => this.setState({orders:res.data}))
  }


  render() {
  this.orders = <Spinner/>
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
          key={order._id}
          to={this.props.match.url + '/' +  order._id}
          className={style.Link}
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
        {!this.state.orders ? <div style={{textAlign:"center"}}>No Orders at the moment.</div> : this.orders}
      </Fragment>
    )
  }
}

export default Orders