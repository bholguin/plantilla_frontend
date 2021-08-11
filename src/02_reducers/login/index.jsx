
import { LOGIN_TYPE } from "../../01_actions/types";

export const auth = (state = {
    mi_cuenta: {},
    mis_permisos: {},
    isAuthenticated: false,
    isLoading: true,
    user: null,
    errors: null,
    token: '',
    microsoftToken: {}
}, action) => {
    switch (action.type) {
        case LOGIN_TYPE.LOGIN_SUCCESSFUL:
            return {
                ...state,
                ...action.payload,
                isAuthenticated: true,
                isLoading: false,
                errors: null
            };
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
        case LOGIN_TYPE.LOGIN_SUCCESSFUL_MICROSOFT:
            return {
                ...state,
                microsoftToken: action.payload
            }
        default:
            return state;
    }
}