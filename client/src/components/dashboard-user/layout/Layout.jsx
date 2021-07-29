import React, {useState, useEffect} from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Sidebar from '../sidebar/Sidebar';
import LoadingUser from '../loading/LoadingAdmin';
import Vinos from '../pages/vinos/Vinos';
import Cervezas from '../pages/cervezas/Cervezas';
import Espumantes from '../pages/espumantes/Espumantes';
import Whiskys from '../pages/whiskys/Whiskys';
import Varios from '../pages/varios/Varios';
import Contacto from '../pages/contacto/Contacto';
import ShoppingCart from '../pages/shopping/ShoppingCart';
import Detail from '../pages/detail/Detail';
import Home1 from '../pages/home/Home';

export default function Layout() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setTimeout(() => setLoading(true), 600);
  }, []);

  if (!loading) {
    return <LoadingUser />
  } else
  return (
    <Router>
      <Sidebar />
      <Switch>
        <Route component={Home1} exact path="/home" />
        <Route component={Vinos} exact path="/home/vinos" />
        <Route component={Cervezas} exact path="/home/cervezas" />
        <Route component={Espumantes} exact path="/home/espumantes" />
        <Route component={Whiskys} exact path="/home/whiskys" />
        <Route component={Varios} exact path="/home/varios" />
        <Route component={Contacto} exact path="/home/contacto" />
        <Route component={ShoppingCart} exact path="/home/compras" />
        <Route component={Detail} exact path="/home/detail/:id" />
      </Switch>
    </Router>
  )
}
