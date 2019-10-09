import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Layout from '../components/Layout/Layout'
import BurgerBuilder from './BurgerBuilder/BurgerBuilder'

import Orders from '../containers/Orders/Orders'
import OrderPage from '../components/OrderPage/OrderPage'
import Checkout from '../components/Checkout/Checkout'


class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
        <Layout>
          <Switch>
            <Route path="/Orders" exact component={Orders}/>
            <Route path="/Orders/:id" exact component={OrderPage}/>
            <Route path="/Checkout" exact component={Checkout}/>
            <Route path="/" exact component={BurgerBuilder}/>
            <Route render={()=> <h1 style={{textAlign:"center"}}>404 Page</h1>}/>
          </Switch>
        </Layout>
        </BrowserRouter>
      </div>
    )
  }
}

export default App;
