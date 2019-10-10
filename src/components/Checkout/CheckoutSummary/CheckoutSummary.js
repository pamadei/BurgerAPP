import React from 'react'
import Burger from '../../Burger/Burger'
import Button from '../../UI/Button/Button'

const CheckoutSummary = props => {
  return (
    <div style={{margin:'auto', textAlign:'center', width:'80%'}}>
      <h2 style={{textAlign:'center'}}>
        Ready to order your burger?
      </h2>
      <div>
      <Burger ingredients={props.ingredients} />
      </div>
      <Button
      btnType={'Danger'}
      clicked={props.checkoutCancel}
      >Cancel</Button>
      <Button
      clicked={props.enableForm}
      btnType={'Success'}
      >Continue</Button>

    </div>
  )
}


export default CheckoutSummary
