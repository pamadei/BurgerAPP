import React, { Component } from 'react'
import axios from '../../axios-orders'
import OrderIngredient from '../../containers/Orders/OrderIngredient/OrderIngredient'
import Order from '../../containers/Orders/Order/Order'
import style from './OrderPage.module.css'


class OrderPage extends Component {

  state = {
    loadedOrder: null
  }

  componentDidMount(){
    axios.get(`/api/orders/${this.props.match.params.id}`)
      .then(res => this.setState({loadedOrder: res.data}))
  }

  render() {
    this.order = <div style={{textAlign:"center"}}>No Orders at the moment.</div>
    if(this.state.loadedOrder){

    this.ingredients = this.state.loadedOrder.ingredients;
    let ingredientsSummary = Object.keys(this.ingredients)
      .map(igKey =>
          <OrderIngredient 
          key={Math.floor(Math.random()*1000) + this.ingredients[igKey]}
          ingredient={igKey}
          ingQuantity={this.ingredients[igKey]}
          />
      );
    this.order = (
      <div className={style.Orders}>
          <Order 
          order={this.state.loadedOrder}
          ingredientsSummary = {ingredientsSummary}/>
      </div>
    )
  }

    return (
      <div>
        <p style={{textAlign:"center"}}>Your Selected Order:</p>
        {this.order}
      </div>
    )
  }
}

export default OrderPage
