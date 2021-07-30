import React, {useState, useEffect} from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import LoadingUser from '../loading/LoadingAdmin';
import Vinos from '../pages/vinos/Vinos';
import Cervezas from '../pages/cervezas/Cervezas';
import Espumantes from '../pages/espumantes/Espumantes';
import Whiskys from '../pages/whiskys/Whiskys';
import Varios from '../pages/varios/Varios';
import Contacto from '../pages/contacto/contacto2';
import ShoppingCart from '../pages/shopping/ShoppingCart';
import Detail from '../pages/detail/Detail';
import Home from '../pages/home/Home';
import Favoritos from '../pages/favoritos/favoritos';

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
      <Switch>
        <Route component={Home} exact path="/home" />
        <Route component={Vinos} exact path="/home/vinos" />
        <Route component={Cervezas} exact path="/home/cervezas" />
        <Route component={Espumantes} exact path="/home/espumantes" />
        <Route component={Whiskys} exact path="/home/whiskys" />
        <Route component={Varios} exact path="/home/varios" />
        <Route component={Contacto} exact path="/home/contacto" />
        <Route component={ShoppingCart} exact path="/home/compras" />
        <Route component={Favoritos} exact path="/home/favoritos" />
        <Route component={Detail} exact path="/home/detail/:id" />
      </Switch>
    </Router>
  )
}
