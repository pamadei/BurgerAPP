import React, { Component } from 'react'
import axios from '../../axios-orders'
import OrderIngredient from '../../containers/Orders/OrderIngredient/OrderIngredient'
import Order from '../../containers/Orders/Order/Order'
import style from './OrderPage.module.css'
import Spinner from '../UI/Spinner/Spinner'


class OrderPage extends Component {

  state = {
    loadedOrder: ''
  }

  componentDidMount(){
    axios.get(`/api/orders/${this.props.match.params.id}`)
      .then(res => this.setState({loadedOrder: res.data}))
  }

  removeOrder = () => {
    
    axios.delete(`/api/orders/${this.props.match.params.id}`)
      .then(res => console.log('remove button'))
    this.props.history.goBack();

  }

  render() {
    this.order = <Spinner/>
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
        {Object.keys(this.state.loadedOrder).length === 0 && this.state.loadedOrder !== '' ? <div style={{textAlign:"center"}}>No Orders at the moment.</div> : this.order}
        <div>
        <button
        className={style.Button}
        onClick={this.removeOrder}
        >Remove Order</button>
        </div>
      </div>
    )
  }
}

export default OrderPage
