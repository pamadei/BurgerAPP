import React, { Component, Fragment } from 'react'
import CheckoutSummary from './CheckoutSummary/CheckoutSummary'
import CheckoutForm from './CheckoutForm/CheckoutForm'
import axios from '../../axios-orders'

class Checkout extends Component {
  state = {
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0,
      veggie: 0
      },
    customer: {
      name: "",
      lastName: "",
      email:""
    },
    totalPrice: 0,
    enableForm: false
  }

  componentDidMount() {
    const query = new URLSearchParams(this.props.location.search)
    const ingredients = {}
    let totalPrice = 0
    for (let param of query.entries()){
      if(param[0] !== 'totalPrice'){
        ingredients[param[0]] = +param[1]
      } else {
        totalPrice = +param[1];
      }
    }

    this.setState({ingredients, totalPrice})
  }

  onChangeHandler = e => {
    this.setState({customer: 
      {...this.state.customer, 
        [e.target.name]: e.target.value
      }})
  }


  onSubmit = e => {
    e.preventDefault();
     const newOrder = {
      ingredients: this.state.ingredients,
      totalPrice: this.state.totalPrice,
      customer: {
        name: this.state.customer.name,
        lastName: this.state.customer.lastName,
        email: this.state.customer.email,
      }
    }

    axios.post('/api/orders', newOrder)
    .then(res => console.log('Thank you for your purchase'))

    this.props.history.goBack();


  }

  enableFormHandler = () => {
    this.setState({enableForm:true})
  }

  checkoutCancelHandler = () => {
    this.props.history.goBack();
  }



  render() {

    return (
      <Fragment>
      <div>
        <CheckoutSummary 
        ingredients={this.state.ingredients}
        enableForm={this.enableFormHandler}
        checkoutCancel={this.checkoutCancelHandler}
        />
      </div>
      { this.state.enableForm ? 
        <CheckoutForm 
        customer={this.state.customer}
        changeHandler={this.onChangeHandler}
        submitForm={this.onSubmit}/>
        : null
      }
      </Fragment>

    )
  }
}


export default Checkout

