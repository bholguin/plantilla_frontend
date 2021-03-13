
import { LOGIN_TYPE } from "../../01_actions/types";

export const auth = (state = {
    token: localStorage.getItem("token"),
    mi_cuenta: JSON.parse(localStorage.getItem("mi_cuenta")),
    mis_permisos: JSON.parse(localStorage.getItem("mis_permisos")),
    isAuthenticated: false,
    isLoading: true,
    user: null,
    errors: null,
}, action) => {

    switch (action.type) {

        case LOGIN_TYPE.USER_LOADING:
            return { ...state, isLoading: true };
        case LOGIN_TYPE.USER_LOADED:
            return {
                ...state,
                isAuthenticated: true,
                isLoading: false,
                user: action.user,
            };
        case LOGIN_TYPE.LOGIN_SUCCESSFUL:
            return { ...state, ...action.payload, isAuthenticated: true, isLoading: false, errors: null };
        case LOGIN_TYPE.AUTHENTICATION_ERROR:
            return {
                ...state,
                errors: action.payload,
                token: null,
                user: null,
                isAuthenticated: false,
                isLoading: false,
                mi_cuenta: null,
                mis_permisos: null
            };
        case LOGIN_TYPE.LOGIN_FAILED:
        case LOGIN_TYPE.LOGOUT_SUCCESSFUL:
            return {
                ...state,
                errors: action.payload,
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