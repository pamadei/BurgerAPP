import React from 'react'
import style from './NavigationItem.module.css'
import {Link} from 'react-router-dom'

const NavigationItem = props => {

  return (
    <li className={style.Item}>
    <Link 
    to={props.link}
    className={props.active ? style.active : null }
    >{props.children}</Link></li>
  )
}

export default NavigationItem
