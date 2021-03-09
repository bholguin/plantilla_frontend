import React, { useEffect } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { Provider, connect } from "react-redux";
import * as actions from './01_actions/index';
import Login from './authentication/login/component/login';
import IndexApp from './IndexApp';
import Usuario from './screens/config/usuarios';
import Home from './screens/home';
import Config from './screens/config';
//hook
import { useStoreApp } from "./03_redux";


const AppRoutes = (PrivateRoute) => {
    return (
        <BrowserRouter>
            <Switch>
                <PrivateRoute exact path='/' component={IndexApp} />
                <PrivateRoute exact path='/app' component={IndexApp} />
                <PrivateRoute exact path='/app/home' component={Home} />
                <PrivateRoute exact path='/app/config' component={Config} />
                <PrivateRoute exact path='/app/config/usuario' component={Usuario} />
                <Route path='/app/login' component={Login} />
            </Switch>
        </BrowserRouter>
    )
}


const RootContainerComponent = (props) => {
    const { loadUserToken, auth } = props
    useEffect(() => { loadUserToken(); }, [loadUserToken]);
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

const mapPropsToState = (state) => { return { auth: state.auth } }

const RootContainer = (connect(mapPropsToState, actions)(RootContainerComponent));

const App = () => {
    const { store } = useStoreApp()
    return (
        <Provider store={store}>
            <RootContainer />
        </Provider>
    )
}


export default App

