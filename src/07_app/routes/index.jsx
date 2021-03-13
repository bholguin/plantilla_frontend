import React from "react";
import { useApp } from "../hook";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Login from '../../06_screens/login';
import Usuario from '../../06_screens/config/usuarios';
import Home from '../../06_screens/home';
import Config from '../../06_screens/config';

const AppRoutes = (PrivateRoute) => {
    return (
        <BrowserRouter>
            <Switch>
                <PrivateRoute exact path='/' component={Home} />
                <PrivateRoute exact path='/app' component={Home} />
                <PrivateRoute exact path='/app/home' component={Home} />
                <PrivateRoute exact path='/app/config' component={Config} />
                <PrivateRoute exact path='/app/config/usuario' component={Usuario} />
                <Route path='/app/login' component={Login} />
            </Switch>
        </BrowserRouter>
    )
}

const RootContainer = () => {
    const { auth } = useApp()
    const PrivateRoute = ({ component: ChildComponent, ...rest }) => {
        return <Route {...rest} render={propsr => {
            if (auth.isLoading) {
                return <em>Loading...</em>;
            } else if (!auth.isAuthenticated) {
                return <Redirect to="/app/login" />;
            } else {
                return <ChildComponent {...propsr} />
            }
        }} />
    };
    return (
        AppRoutes(PrivateRoute)
    )
}

export default RootContainer