import React from 'react';
import Sidebar from '../sidebar/Sidebar';
import Dashboard from '../pages/dashboard/Dashboard';
import Users from '../pages/users/Users';
import Products from '../pages/products/Products';
import Deliverys from '../pages/deliverys/Delivery';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

export default function Layout() {
  return (
    <Router>
      <Sidebar />
      <Switch>
        <Route component={Dashboard} exact path="/dashboard-admin" />
        <Route component={Users} exact path="/dashboard-admin/usuarios" />
        <Route component={Products} exact path="/dashboard-admin/productos" />
        <Route component={Deliverys} exact path="/dashboard-admin/pedidos" />
      </Switch>
    </Router>
  )
}
