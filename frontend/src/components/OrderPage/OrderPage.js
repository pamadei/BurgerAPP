import React, { Component } from 'react'
import axios from '../../axios-orders'
import OrderIngredient from '../../containers/Orders/OrderIngredient/OrderIngredient'
import Order from '../../containers/Orders/Order/Order'
import style from './OrderPage.module.css'
import Spinner from '../UI/Spinner/Spinner'
import Modal from '../UI/Modal/Modal'

class OrderPage extends Component {

  // _isMounted = false

  state = {
    loadedOrder: '',
    showModal: false,
  }

  fetchData = () => {
    axios.get(`/api/orders/${this.props.match.params.id}`)
    .then(res => this.setState({loadedOrder: res.data}))
  }

  componentDidMount(){
    this._isMounted = true
    axios.get(`/api/orders/${this.props.match.params.id}`)
    .then(res => this.setState({loadedOrder: res.data}))
    
  }

  // componentWillUnmount(){
  //   this._isMounted = false
  // }

  removeOrder = () => {
    // if(this._isMounted){
    //   axios.delete(`/api/orders/${this.props.match.params.id}`)
    //   .then(res => console.log('remove button'));
    //   // this.fetchData();
    // }
    axios.delete(`/api/orders/${this.props.match.params.id}`)
      .then(res => console.log('remove button'));
    this.props.history.goBack();

  }

  showModalHandler = () => {
    this.setState({showModal:true})
  }

   cancelModalHandler = () => {
    this.setState({showModal:false})
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
        <button
        className={style.Button}
        onClick={this.showModalHandler}
        >Remove Order</button>
        <Modal
        showModal={this.state.showModal}
        cancelOrder={this.cancelModalHandler}
        >
        <div style={{textAlign: 'center'}}>
          <h3>Are you sure?</h3>
          <button style={{fontSize:'1rem'}} 
          className={style.Button}
          onClick={this.removeOrder}
          >Remove this Order</button>
        </div>
       </Modal>
      </div>
    )
  }
}

export default OrderPage
