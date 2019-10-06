import React, {Fragment} from 'react'
import style from './Modal.module.css'
import Backdrop from '../Backdrop/Backdrop'

const Modal = (props) => {
  return (
    <Fragment>
      <Backdrop 
      showModal = {props.showModal}
      clicked ={props.cancelOrder} 
      />
      <div 
      className={style.Modal}
      style={{
        transform: props.showModal ? 'translateY(0)' : 'translateY(-150vh)',
        opacity: props.showModal ? '1' : '0'
      }}
      >
        {props.children}
      </div>
    </Fragment>
  )
}

export default Modal

