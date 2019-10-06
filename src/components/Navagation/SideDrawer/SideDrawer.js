import React, { Fragment } from 'react'
import style from './SideDrawer.module.css'
import Logo from '../../Logo/Logo'
import NavigationItems from '..//NavigationItems/NavigationItems'
import Backdrop from '../../UI/Backdrop/Backdrop';

const SideDrawer = props => {

  // Animation...

  let attachedClasses = [style.SideDrawer, style.Close];
  if(props.open){
    attachedClasses = [style.SideDrawer, style.Open]
  }

  return (
    <Fragment>
      <Backdrop
       showModal={props.open} 
       clicked={props.closed}
       />
      <div className={attachedClasses.join(' ')}>
        <div className={style.Logo}>
        <Logo />
        </div>
        <nav>
          <NavigationItems/>
        </nav>
    </div>
    </Fragment>
  )
}

export default SideDrawer
