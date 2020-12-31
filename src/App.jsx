import React, { Component, Fragment } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import ReduxPromise from 'redux-promise';
import { Provider, connect } from "react-redux";

import * as actions from './01_actions/index';
import reducer from './02_reducers/index';
import Login from './authentication/login/component/login';
import IndexApp from './IndexApp';
import Usuario from './03_components/config/usuarios';
import Home from './03_components/home';
import Config from './03_components/config';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise, thunk)(createStore);

function configureStore() {
    const store = createStoreWithMiddleware(reducer)
    return store;
}

class RootContainerComponent extends Component {

    componentDidMount() {
        this.props.loadUserToken();
    }

    PrivateRoute = ({ component: ChildComponent, ...rest }) => {
        return <Route {...rest} render={props => {
            if (this.props.auth.isLoading) {
                return <em>Loading...</em>;
            } else if (!this.props.auth.isAuthenticated) {
                return <Redirect to="/app/login" />;
            } else {
                return <ChildComponent {...props} />
            }
        }} />
    };

    render() {
        let { PrivateRoute } = this;
        return (
            <BrowserRouter>
                <Fragment>
                    <Switch>
                        <PrivateRoute exact path='/' component={IndexApp} />
                        <PrivateRoute exact path='/app' component={IndexApp} />
                        <PrivateRoute exact path='/app/home' component={Home} />
                        <PrivateRoute exact path='/app/config' component={Config} />
                        <PrivateRoute exact path='/app/config/usuario' component={Usuario} />
                        <Route path='/app/login' component={Login} />
                    </Switch>
                </Fragment>
            </BrowserRouter>
        )
    }
}

const mapPropsToState = (state) => { return { auth: state.auth } }

const store = configureStore();

let RootContainer = (connect(mapPropsToState, actions)(RootContainerComponent));

export default class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <RootContainer />
            </Provider>
        );
    }
}
