import React from 'react'
import NavigationItem from './NavigationItem/NavigationItem'
import style from './NavigationItems.module.css'

const NavigationItems = props => {

  return (
    <ul className={style.List}>
      <NavigationItem 
      link={'/'} 
      >Burger Builder
      </NavigationItem>
      {/* <NavigationItem 
      link={'/Checkout'}>Checkout
      </NavigationItem> */}
      <NavigationItem 
      link={'/Orders'}>Orders(Shop)
      </NavigationItem>
    </ul>
  )
}

export default NavigationItems
