import React from 'react'
import style from './CheckoutForm.module.css'

const CheckoutForm = props => {
  return (
    <div>
      <form className={style.Form} onSubmit={props.submitForm}>
        <input className={style.Input} type="text" name="name"  value={props.customer.name} onChange={props.changeHandler} placeholder="First Name"/>
        <input className={style.Input} type="text" name="lastName"  value={props.customer.lastName}onChange={props.changeHandler}  placeholder="Last Name"/>
        <input className={style.Input} type="email" name="email" value={props.customer.email} onChange={props.changeHandler}  placeholder="Email Name"/>
        <button className={style.Submit} type="submit">Place your Order</button>
      </form>
    </div>
  )
}


export default CheckoutForm
