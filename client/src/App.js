
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { GET_LOCAL_STORAGE } from "./actions/index";
import { Route } from 'react-router-dom';
import LandingPage from './components/landing/landing';
import SignUp from "./components/register/userRegister/signUp/SignUp";
import Login from './components/register/userRegister/login/login';
import Dashboard from './components/register/userRegister/dashboard/dashboard';
import UpdateProfile from './components/register/userRegister/updateProfile/updateProfile';
import ForgotPassword from './components/register/userRegister/forgotPassword/forgotPassword';
import { AuthProvider } from "../src/contexts/AuthContext";
import PrivateRouteUser from './components/register/userRegister/privateRouteUser/privateRouteUser';
import PrivateRouteAdmin from "./components/register/adminRegister/privateRouteAdmin/privateRouteAdmin";
import Delivery from './components/register/userRegister/component/confirmDelivery';
import About from './components/about/about'
import misPedidos from './components/register/userRegister/misPedidos/misPedidos';
import ShoppingCart from "./components/dashboard-user/pages/shopping/ShoppingCart";
import FormCompras from "./components/shoppingCart/FormCompras";
import wishList from "./components/wishList/wishList";
import writingReviews from './components/writingReviews/writingReviews'
import LayoutAdmin from './components/dashboard-admin/layout/Layout';
import LayoutUser from './components/dashboard-user/layout/Layout';
import Detail from '../src/components/dashboard-user/pages/detail/Detail';

function App() {

  const dispatch = useDispatch()
  useEffect(() => {
  dispatch({type:GET_LOCAL_STORAGE})
  },[])
  return (
    <React.Fragment>
      <AuthProvider>
        <PrivateRouteUser component={Dashboard} exact path='/micuenta/'/>
        <PrivateRouteUser component={misPedidos} exact path='/micuenta/mispedidos/:id'/>
        <PrivateRouteUser component={UpdateProfile} path='/update-profile'/>
        <PrivateRouteUser component={wishList} exact path='/micuenta/favoritos/:id'/>
        <PrivateRouteUser component={ForgotPassword} exact path='/forgotPassword'/>
        <PrivateRouteUser component={Delivery} exact path='/delivery'/>
        <PrivateRouteUser component={writingReviews} exact path='/reviews/:id'/>
        <Route component={LandingPage} exact path='/'/>
        <Route component={About} exact path='/about'/>
        <Route component={Login} exact path='/login'/>
        <Route component={FormCompras} exact path='/FormCompras'/>

        {/* Rutas de prueba */}
        <PrivateRouteAdmin component={LayoutAdmin} path='/dashboard-admin'/>
        <Route component={LayoutUser} exact path='/home' />
        <Route component={Detail} exact path='/home/detail/:id'/>
        <Route component={ShoppingCart} exact path='/home/compras'/>
      </AuthProvider>
    </React.Fragment>
  )
};

export default App;
