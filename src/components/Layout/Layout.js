import React, {Fragment, Component} from 'react'
import style from './Layout.module.css'
import Toolbar from '../Navigation/Toolbar/Toolbar'
import SideDrawer from '../Navigation/SideDrawer/SideDrawer'

class Layout extends Component {

  state = {
    showSideDrawer:false
  }

  sideDrawerCloseHandler = () => {
    this.setState({showSideDrawer:false})
  }

  sideDrawerOpenHandler = () => {
    this.setState({showSideDrawer:true})
  }

  render() {
    return (
      <Fragment>
        <Toolbar open={this.sideDrawerOpenHandler} />
        <SideDrawer 
        closed={this.sideDrawerCloseHandler}
        open={this.state.showSideDrawer}
        />
      <main className={style.Main}>
        {this.props.children}
      </main>
      </Fragment>
    )
  }

}

export default Layout