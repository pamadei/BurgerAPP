import React from 'react'
import Button from '../../UI/Button/Button'

function OrderSummary({ingredients, totalPrice, cancelOrder, continueOrder }) {

  const ingredientsSummray = Object.keys(ingredients)
  .map(keyIg => [...Array([ingredients[keyIg]])]
  .map((_,i) => 
  <li key={keyIg}
  >{keyIg} : {ingredients[keyIg]}</li>
  ))

  return (
    <div>
      <h3>Your Order</h3>
        <p>A delicious burger with the following ingredients:</p>
        <ul>
          {ingredientsSummray}
        </ul>
        <strong>Total Price: {totalPrice.toFixed(2)}</strong>
        <p>Continue to Checkout?</p>
        <Button 
        clicked={cancelOrder}
        btnType={'Danger'}
        >Cancel
        </Button>
        <Button
        clicked={()=>continueOrder(ingredients, totalPrice.toFixed(2))}
        btnType={'Success'}
        >Continue</Button>
    </div>
  )
}


export default OrderSummary

