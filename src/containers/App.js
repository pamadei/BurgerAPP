import React, { Component } from 'react';
import Layout from '../components/Layout/Layout'
import BurgerBuilder from './BurgerBuilder/BurgerBuilder'
import Orders from '../containers/Orders/Orders'
import {BrowserRouter} from 'react-router-dom'
import {Route} from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
        <Layout>
        <Route path="/" exact component={BurgerBuilder}/>
        <Route path="/Orders" exact component={Orders}/>
        </Layout>
        </BrowserRouter>
      </div>
    )
  }
}

export default App;
