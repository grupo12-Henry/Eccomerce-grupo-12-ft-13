import React from "react";
import { Route } from 'react-router-dom';
import LandingPage from './components/landing/landing';
import Home from './components/home/home';
import Detail from './components/detail/detail';
import SignUp from "./components/register/userRegister/signUp/SignUp";
import Dashboard from './components/register/userRegister/dashboard/dashboard';
import UpdateProfile from './components/register/userRegister/updateProfile/updateProfile';
import Login from './components/register/userRegister/login/login';
import ForgotPassword from './components/register/userRegister/forgotPassword/forgotPassword';
import { AuthProvider } from "../src/contexts/AuthContext";
import PrivateRouteUser from './components/register/userRegister/privateRouteUser/privateRouteUser';
import PrivateRouteAdmin from "./components/register/adminRegister/privateRouteAdmin/privateRouteAdmin";
import AdminComponent from './components/register/adminRegister/component/AdminComponent';
import Delivery from './components/register/userRegister/component/confirmDelivery';

function App() {
  return (
    <React.Fragment>
      <AuthProvider>
        <PrivateRouteUser component={Dashboard} exact path='/dashboard'/>
        <PrivateRouteUser component={UpdateProfile} path='/update-profile'/>
        <PrivateRouteUser component={Delivery} path='/delivery'/>
        <PrivateRouteAdmin component={AdminComponent} path='/dashboard-admin'/>
        <Route component={LandingPage} exact path='/'/>
        <Route component={Home} exact path='/home'/>
        <Route component={SignUp} exact path='/signup'/>
        <Route component={Login} exact path='/login'/>
        <Route component={ForgotPassword} exact path='/forgotPassword'/>
        <Route component={Detail} exact path='/detail/:id'/>
      </AuthProvider>
    </React.Fragment>
  )
};

export default App;
