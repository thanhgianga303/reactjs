import React, { Component } from 'react';
import {BrowserRouter,Route, Switch} from 'react-router-dom';
import Product from './containers/Product/Product';
import Account from './containers/Account/Account';
class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route path="/Product" component={Product} />
            <Route path="/Account" component={Account} />
            <Route path="/" />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}
export default App;
