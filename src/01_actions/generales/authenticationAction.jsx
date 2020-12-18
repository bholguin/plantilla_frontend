import {CONSTAN} from '../../00_utilities/constantes/index';

export const loadUser = () => {
    return (dispatch, getState) => {
        dispatch({type: "USER_LOADING"});

        const token = getState().auth.token;

        let headers = {
            "Content-Type": "application/json",
        };

        if (token) {
            headers["x-access-tokens"] = token;
        }
        return fetch(CONSTAN.API+"login/", {headers,})
            .then(res => {
                console.log(res, 'rspuesta get')
                if (res.status < 501) {
                    return res.json().then(data => {
                        return {status: res.status, data};
                    })
                }
            })
            .then(res => {
                if (res.status === 200) {
                    dispatch({type: 'USER_LOADED', user: res.data});
                    return res.data;
                } else if (res.status >= 400 && res.status < 500) {
                    dispatch({type: "AUTHENTICATION_ERROR", data: res.data});
                    throw res.data;
                }else{
                    dispatch({type: "LOGIN_FAILED", data: res.data});
                }
            })
    }
};

export const clear_authentication_errors = () => {
    return (dispatch) => {
        dispatch({type: "LOGIN_FAILED", data: null});
    }
};

export const login = (username, password) => {
    return (dispatch) => {
        let headers = {"Content-Type": "application/json"};
        let body = JSON.stringify({username, password});
        return fetch(CONSTAN.API+"login/", {headers, body, method: "POST"})
            .then(res => {
                if (res.status < 501) {
                    return res.json().then(data => {
                        return {status: res.status, data};
                    });
                }
            })
            .then(res => {
                if (res.status === 200) {
                    dispatch({type: 'LOGIN_SUCCESSFUL', data: res.data});
                } else if (res.status === 403 || res.status === 401) {
                    dispatch({type: "AUTHENTICATION_ERROR", data: res.data});
                } else {
                    dispatch({type: "LOGIN_FAILED", data: res.data});
                }
            })
    }
};

export const logout = () => {
    return (dispatch, getState) => {
        const token = getState().auth.token;
        let headers = {"Content-Type": "application/json"};
        if (token) {
            headers["x-access-tokens"] = token;
        }
        return fetch(CONSTAN.API+"logout/", {headers})
            .then(res => {
                console.log('logout',res);
                if (res.status === 204) {
                    return {status: res.status, data: {}};
                } else if (res.status < 501) {
                    return res.json().then(data => {
                        return {status: res.status, data};
                    })
                } else {
                    console.log("Server Error!");
                    throw res;
                }
            })
            .then(res => {
            console.log('logout',res);
                if (res.status === 204) {
                    dispatch({type: 'LOGOUT_SUCCESSFUL'});
                    return res.data;
                } else if (res.status === 403 || res.status === 401) {
                    dispatch({type: "AUTHENTICATION_ERROR", data: res.data});
                    throw res.data;
                }
            })
    }
};