





export const AppRoutes = (PrivateRoute) => {
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

export const useRouteApp = () => {


    






}