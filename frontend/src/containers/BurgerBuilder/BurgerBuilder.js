import React, { Component, Fragment } from 'react'
import Burger from '../../components/Burger/Burger'
import BuilderControls from '../../components/Burger/BuildControls/BuilderCotrols'
import Modal from '../../components/UI/Modal/Modal'
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary'
import Spinner from '../../components/UI/Spinner/Spinner'

const INGREDIENTS_COSTS = {
  lettuce: 0.50,
  bacon: 1.2,
  cheese: 0.9,
  beef: 1.5,
  veggie: 1.5
}
class BurgerBuilder extends Component {
  
  state = {
    ingredients: {
      lettuce: 0,
      bacon: 0,
      cheese: 0,
      beef: 0,
      veggie: 0
    },
    totalPrice: 2,
    purchasable: false,
    purchasing: false,
    loading: false,
  }

  updatePurchaseState(ingredients) {
    const sumIng = Object.values(ingredients)
    .reduce((a,b) => a + b, 0);
    this.setState({purchasable: sumIng > 0})
  }

  addIngredientHandler = type => {
    const updateCount = this.state.ingredients[type] + 1
    const updatedIngredient = {...this.state.ingredients};
    updatedIngredient[type] = updateCount;

    const newPrice = this.state.totalPrice + INGREDIENTS_COSTS[type]

    this.setState({
      ingredients: updatedIngredient,
      totalPrice: newPrice
    });

    this.updatePurchaseState(updatedIngredient);

  }

  revemoIngredientHandler = type => {
    const oldCount = this.state.ingredients[type]
    if(oldCount <= 0){
      return;
    }
      const updateCount = oldCount - 1;
      const updatedIngredient = {...this.state.ingredients};
      updatedIngredient[type] = updateCount;
      const newPrice = this.state.totalPrice - INGREDIENTS_COSTS[type];
      this.setState({
        ingredients: updatedIngredient,
        totalPrice: newPrice
      });

    this.updatePurchaseState(updatedIngredient);

  }

  purchaseHandler = () =>{
    this.setState({purchasing:true})
  }

  purchaseHandlerCancel = () => {
    this.setState({purchasing:false})
  }

  purchaseHandlerContinue = () => {
    // this.setState({loading:true})
    // const newOrder = {
    //   ingredients: this.state.ingredients,
    //   totalPrice: this.state.totalPrice.toFixed(),
    //   customer: {
    //     name: faker.name.findName(),
    //     email: faker.internet.email()
    //   }
    // }
    // if(_isMounted){
    // axios.post('/api/orders', newOrder)
    // .then(res => this.setState({loading:false, purchasing:false}));
    // }

    const queryIngredients = []
    for(let i in this.state.ingredients){
      queryIngredients.push(encodeURIComponent(i) + '=' + encodeURIComponent(this.state.ingredients[i]))
    }

    const queryTotalPrice = [encodeURIComponent('totalPrice') + '=' + encodeURIComponent(this.state.totalPrice.toFixed(2))]

    const queryParams = queryIngredients.concat(queryTotalPrice);

    this.props.history.push({
      pathname: '/Checkout',
      search: '?' + queryParams.join('&')
    })
  }

  render() {
    let sumIg = Object.values(this.state.ingredients).reduce((a,b) => a + b, 0)

    const disableInfo = {...this.state.ingredients}
    for(let key in disableInfo){
      disableInfo[key] = disableInfo[key] <= 0
    }
    
    return (
      <Fragment>
        <Burger sum={sumIg} ingredients={this.state.ingredients}/>
        <BuilderControls 
        ingredients={this.state.ingredients}
        totalPrice={this.state.totalPrice}
        addIngredient={this.addIngredientHandler}
        removeIngredient={this.revemoIngredientHandler}
        disabled={disableInfo}
        purchasable={this.state.purchasable}
        ordered={this.purchaseHandler}
        />
        <Modal
        showModal = {this.state.purchasing}
        cancelOrder = {this.purchaseHandlerCancel}
        >
          {this.state.loading ? <Spinner/> : <OrderSummary
          ingredients={this.state.ingredients}
          totalPrice={this.state.totalPrice}
          cancelOrder={this.purchaseHandlerCancel}
          continueOrder={this.purchaseHandlerContinue}
          />}
          
        </Modal>
      </Fragment>
    )
  }

}

export default BurgerBuilder;