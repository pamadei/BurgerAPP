import React, { Component, Fragment } from 'react'
import Burger from '../../components/Burger/Burger'
import BuilderControls from '../../components/Burger/BuildControls/BuilderCotrols'
import Modal from '../../components/UI/Modal/Modal'
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary'

const INGREDIENTS_COSTS = {
  salad: 0.1,
  bacon: 0.3,
  cheese: 0.5,
  meat: 1,
  veggie: 1
}
class BurgerBuilder extends Component {
  
  state = {
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0,
      veggie: 0
    },
    totalPrice: 4,
    purchasable: false,
    purchasing: false
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
    alert('You Continue');
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
          <OrderSummary
          ingredients={this.state.ingredients}
          totalPrice={this.state.totalPrice}
          cancelOrder={this.purchaseHandlerCancel}
          continueOrder={this.purchaseHandlerContinue}
          />
        </Modal>
      </Fragment>
    )
  }

}

export default BurgerBuilder;