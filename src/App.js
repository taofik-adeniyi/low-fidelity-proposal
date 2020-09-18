import React from 'react';
import './App.css';
import DashBoard from './pages/DashBoard/DashBoard'
import Deals from './pages/Deals/Deals'
import Merchants from './pages/Merchants/Merchants'
import Transactions from './pages/Transactions/Transactions'
import UserManagement from './pages/UserManagement/UserManagement'
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom'

function App() {
  return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/dashboard" component={DashBoard} />
          <Route exact path="/deals" component={Deals} />
          <Route exact path="/merchants" component={Merchants} />
          <Route exact path="/transactions" component={Transactions} />
          <Route exact path="/user-management" component={UserManagement} />
          <Redirect from="/" to="/dashboard" />
        </Switch>
      </BrowserRouter>
  );
}

export default App;
