import React from 'react'

const DrawerToggle = props => {
  return (
    <div onClick={props.open}>
      <span 
      style={{color:'white'}}>&#9776;
      </span>
    </div>
  )
}


export default DrawerToggle
