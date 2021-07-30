
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { GET_LOCAL_STORAGE } from "./actions/index";
import { Route } from 'react-router-dom';
import Landing from './components/landing/landing';
import Login from './components/register/userRegister/login/login';
import UpdateProfile from './components/dashboard-user/pages/update-profile/Update';
import ForgotPassword from './components/register/userRegister/forgotPassword/forgotPassword';
import { AuthProvider } from "../src/contexts/AuthContext";
import PrivateRouteUser from './components/register/userRegister/privateRouteUser/privateRouteUser';
import PrivateRouteAdmin from "./components/register/adminRegister/privateRouteAdmin/privateRouteAdmin";
import Delivery from './components/register/userRegister/component/confirmDelivery';
import misPedidos from './components/register/userRegister/misPedidos/misPedidos';
import ShoppingCart from "./components/dashboard-user/pages/shopping/ShoppingCart";
import FormCompras from "./components/dashboard-user/pages/formCompras/formCompras";
import wishList from "./components/wishList/wishList";
import writingReviews from './components/writingReviews/writingReviews'
import LayoutAdmin from './components/dashboard-admin/layout/Layout';
import LayoutUser from './components/dashboard-user/layout/Layout';
import Detail from '../src/components/dashboard-user/pages/detail/Detail';
import MiCuenta from '../src/components/dashboard-user/pages//miCuenta/Cuenta';
import Sugeridos from './components/sugeridos/sugeridos';
import Footer from "./components/footer/footer";
import Loading from "../src/components/dashboard-admin/loading/LoadingUser"
import Vinos from "./components/dashboard-user/pages/vinos/Vinos";
import Cervezas from "../src/components/dashboard-user/pages/cervezas/Cervezas"
import Espumantes from '../src/components/dashboard-user/pages/espumantes/Espumantes';
import Whiskys from '../src/components/dashboard-user/pages/whiskys/Whiskys';
import Varios from '../src/components/dashboard-user/pages/varios/Varios';
import Favorites from '../src/components/dashboard-user/pages/favoritos/favoritos';
import Contacto from '../src/components/dashboard-user/pages/contacto/contacto2';

function App() {

  const dispatch = useDispatch()
  useEffect(() => {
  dispatch({type:GET_LOCAL_STORAGE})
  },[])
  return (
    <React.Fragment>
      <AuthProvider>
        <PrivateRouteUser component={misPedidos} exact path='/micuenta/mispedidos/:id'/>
        <PrivateRouteUser component={wishList} exact path='/micuenta/favoritos/:id'/>
        <PrivateRouteUser component={ForgotPassword} exact path='/home/forgotPassword'/>
        <PrivateRouteUser component={Delivery} exact path='/delivery'/>
        <PrivateRouteUser component={writingReviews} exact path='/reviews/:id'/>
        <Route component={Login} exact path='/login'/>
        <PrivateRouteAdmin component={LayoutAdmin} path='/dashboard-admin'/>
        <Route component={Landing} exact path='/'/>
        <Route component={LayoutUser} exact path='/home' />
        <Route component={Detail} exact path='/home/detail/:id'/>
        <Route component={ShoppingCart} exact path='/home/compras'/>
        <Route component={FormCompras} exact path='/home/compras-form'/>
        <Route component={Vinos} exact path='/home/vinos' />
        <Route component={Cervezas} exact path='/home/cervezas' />
        <Route component={Espumantes} exact path='/home/espumantes' />
        <Route component={Favorites} exact path='/home/favoritos' />
        <Route component={Varios} exact path='/home/varios' />
        <PrivateRouteUser component={MiCuenta} exact path='/home/micuenta'/>
        <PrivateRouteUser component={UpdateProfile} path='/home/update-profile'/>
        <Route component={Whiskys} exact path='/home/whiskys' />
        <Route component={Contacto} exact path='/home/contacto' />
        <Route component={Sugeridos} exact path='/sugeridos'/>
        <Route component={Footer} exact path='/footer'/>
        <Route component={Loading} exact path='/loading'/>
      </AuthProvider>
    </React.Fragment>
  )
};

export default App;
