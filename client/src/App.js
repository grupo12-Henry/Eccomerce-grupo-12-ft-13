
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
        <PrivateRouteUser component={ForgotPassword} exact path='/forgotPassword'/>
        <PrivateRouteUser component={Delivery} exact path='/delivery'/>
        <PrivateRouteUser component={writingReviews} exact path='/reviews/:id'/>
        <Route component={Login} exact path='/login'/>
        {/* Rutas de prueba */}
        <PrivateRouteAdmin component={LayoutAdmin} path='/dashboard-admin'/>
        <Route component={Landing} exact path='/'/>
        <Route component={LayoutUser} exact path='/home' />
        <Route component={Detail} exact path='/home/detail/:id'/>
        <Route component={ShoppingCart} exact path='/home/compras'/>
        <Route component={FormCompras} exact path='/home/compras-form'/>
        <PrivateRouteUser component={MiCuenta} exact path='/home/micuenta'/>
        <PrivateRouteUser component={UpdateProfile} path='/home/update-profile'/>
        <Route component={Sugeridos} exact path='/sugeridos'/>
      </AuthProvider>
    </React.Fragment>
  )
};

export default App;
