import React from 'react'
import style from './BuildControl.module.css'

const BuildControl = (props) => {

  return (
    <div className={style.Main}>
      <p className={style.Title}>{props.children}</p>
      <button 
      onClick={props.removeIngredient} 
      className={style.Button}
      disabled = {props.disabled}
      ><span className={style.Subtitle}>Less</span></button>
      <button 
      onClick={props.addIngredient} 
      className={style.Button}
      ><span className={style.Subtitle}>More</span></button>
    </div>
  )
}


export default BuildControl
