import React from "react";
import { Route } from 'react-router-dom';
import LandingPage from './components/landing/landing';
import Home from './components/home/home';
import Detail from './components/detail/detail';
import SignUp from "./components/register/userRegister/signUp/SignUp";
import Login from './components/register/userRegister/login/login';
import Dashboard from './components/register/userRegister/dashboard/dashboard';
import UpdateProfile from './components/register/userRegister/updateProfile/updateProfile';
import ForgotPassword from './components/register/userRegister/forgotPassword/forgotPassword';
import Vinos from './components/categories/vinos/vinos';
import Espumantes from './components/categories/espumantes/espumantes';
import Cervezas from "./components/categories/cervezas/cervezas";
import Whiskys from './components/categories/whiskys/whiskys';
import Varios from "./components/categories/varios/varios";
import { AuthProvider } from "../src/contexts/AuthContext";
import PrivateRouteUser from './components/register/userRegister/privateRouteUser/privateRouteUser';
import PrivateRouteAdmin from "./components/register/adminRegister/privateRouteAdmin/privateRouteAdmin";
import AdminComponent from './components/register/adminRegister/component/AdminComponent';
import Delivery from './components/register/userRegister/component/confirmDelivery';
import ShoppingCart from "./components/shoppingCart/ShoppingCart";
import misPedidos from './components/register/userRegister/misPedidos/misPedidos';

function App() {
  return (
    <React.Fragment>
      <AuthProvider>
        <PrivateRouteAdmin component={AdminComponent} path='/dashboard-admin'/>
        <PrivateRouteUser component={Dashboard} exact path='/dashboard'/>
        <PrivateRouteUser component={UpdateProfile} path='/update-profile'/>
        <PrivateRouteUser component={Delivery} path='/delivery'/>
        <PrivateRouteUser component={ForgotPassword} exact path='/forgotPassword'/>
        <PrivateRouteUser component={Delivery} exact path='/delivery'/>
        <Route component={LandingPage} exact path='/'/>
        <Route component={ShoppingCart} exact path='/compras'/>
        <Route component={Home} exact path='/home'/>
        <Route component={Whiskys} exact path='/whiskys'/>
        <Route component={Varios} exact path='/varios'/>
        <Route component={Espumantes} exact path='/espumantes'/>
        <Route component={Cervezas} exact path='/cervezas'/>
        <Route component={Vinos} exact path='/vinos'/>
        <Route component={SignUp} exact path='/signup'/>
        <Route component={Login} exact path='/login'/>
        <Route component={misPedidos} exact path='/misPedidos'/>
        <Route component={Detail} exact path='/detail/:id'/>
      </AuthProvider>
    </React.Fragment>
  )
};

export default App;