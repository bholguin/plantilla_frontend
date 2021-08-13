import React from "react";
import { useApp } from "../hook";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Login from '../../06_screens/login';
import Usuario from '../../06_screens/config/usuarios';
import Home from '../../06_screens/home';
import Config from '../../06_screens/config';
import Sig from "../../06_screens/sig"
import Empresas from "../../06_screens/config/empresas";
import EmpresaCreateOrEdit from "../../06_screens/config/empresas/CreateOrEdit";
import UsuarioCreateOrEdit from "../../06_screens/config/usuarios/CreateOrEdit"
import EmpresaDocuemnts from "../../06_screens/sig/Documents"

const AppRoutes = (PrivateRoute) => {
    return (
        <BrowserRouter>
            <Switch>
                {/* Rutas generales */}
                <PrivateRoute exact path='/' component={Home} />
                <PrivateRoute exact path='/app' component={Home} />
                <PrivateRoute exact path='/app/home' component={Home} />
                <PrivateRoute exact path='/app/config' component={Config} />

                {/* Rutas modulo sig */}
                <PrivateRoute exact path='/app/sig' component={Sig} />
                <PrivateRoute exact path='/app/sig/documents' component={EmpresaDocuemnts} />

                {/* Rutas modulo usuarios */}
                <PrivateRoute exact path='/app/config/usuario' component={Usuario} />
                <PrivateRoute exact path='/app/config/usuario/create-or-edit' component={UsuarioCreateOrEdit} />

                {/* Rutas modulo empresa */}
                <PrivateRoute exact path='/app/config/empresas' component={Empresas} />
                <PrivateRoute exact path='/app/config/empresas/create-or-edit' component={EmpresaCreateOrEdit} />

                {/* Rutas Login */}
                <Route path='/app/login' component={Login} />
            </Switch>
        </BrowserRouter>
    )
}

const RootContainer = () => {
    const { auth } = useApp()
    const PrivateRoute = ({ component: ChildComponent, ...rest }) => {
        return <Route {...rest} render={props => {
            if (auth.isLoading) {
                return <em>Loading...</em>;
            } else if (!auth.isAuthenticated) {
                return <Redirect to="/app/login" />;
            } else {
                return <ChildComponent {...props} />
            }
        }} />
    };

    return AppRoutes(PrivateRoute)
}

export default RootContainer