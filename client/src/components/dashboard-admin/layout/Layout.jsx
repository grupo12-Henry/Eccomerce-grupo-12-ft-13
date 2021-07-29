import React, {useState, useEffect} from 'react';
import Dashboard from '../pages/dashboard/Dashboard';
import Sidebar from '../sidebar/Sidebar';
import Users from '../pages/users/Users';
import Products from '../pages/products/Products';
import Deliverys from '../pages/deliverys/Delivery';
import LoadingAdmin from '../loading/LoadingUser';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

export default function Layout() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setTimeout(() => setLoading(true), 600);
  }, []);

  if (!loading) {
    return <LoadingAdmin />
  } else
  return (
    <Router>
      <Sidebar />
      <Switch>
        <Route component={Dashboard} exact path="/dashboard-admin/" />
        <Route component={Users} exact path="/dashboard-admin/usuarios" />
        <Route component={Products} exact path="/dashboard-admin/productos" />
        <Route component={Deliverys} exact path="/dashboard-admin/pedidos" />
      </Switch>
    </Router>
  )
}
