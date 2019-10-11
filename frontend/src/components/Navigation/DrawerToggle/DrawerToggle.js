import React from 'react'
import style from './DrawerToggle.module.css'

const DrawerToggle = props => {
  return (
    <div className={style.DrawerToggle} onClick={props.open}>
      <span 
      style={{color:'white'}}>&#9776;
      </span>
    </div>
  )
}


export default DrawerToggle
