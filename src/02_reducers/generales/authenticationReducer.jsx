const initialState = {
    token: localStorage.getItem("token"),
    mi_cuenta: JSON.parse(localStorage.getItem("mi_cuenta")),
    mis_permisos: JSON.parse(localStorage.getItem("mis_permisos")),
    isAuthenticated: false,
    isLoading: true,
    user: null,
    errors: null,
};


export default function auth(state = initialState, action) {
    switch (action.type) {

        case 'USER_LOADING':
            return {...state, isLoading: true};
        case 'USER_LOADED':
            return {
                ...state,
                isAuthenticated: true,
                isLoading: false,
                user: action.user,
            };
        case 'LOGIN_SUCCESSFUL':
            localStorage.setItem("token", action.data.token);
            localStorage.setItem("mi_cuenta", action.data.account ? JSON.stringify(action.data.account) : null);
            localStorage.setItem("mis_permisos", action.data.mis_permisos ? JSON.stringify(action.data.mis_permisos) : null);
            return {...state, ...action.data, isAuthenticated: true, isLoading: false, errors: null};

        case 'AUTHENTICATION_ERROR':
            localStorage.removeItem("token");
            localStorage.removeItem("mi_cuenta");
            localStorage.removeItem("mis_permisos");
            return {
                ...state,
                errors: action.data,
                token: null,
                user: null,
                isAuthenticated: false,
                isLoading: false,
                mi_cuenta: null,
                mis_permisos: null
            };
        case 'LOGIN_FAILED':
        case 'LOGOUT_SUCCESSFUL':
            console.log('entro al logout');
            localStorage.removeItem("token");
            localStorage.removeItem("mi_cuenta");
            localStorage.removeItem("mis_permisos");
            return {
                ...state,
                errors: action.data,
                token: null,
                user: null,
                isAuthenticated: false,
                isLoading: false,
                mi_cuenta: null,
                mis_permisos: null
            };
        default:
            return state;
    }
}