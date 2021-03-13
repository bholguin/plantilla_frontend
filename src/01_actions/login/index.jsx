import {
    LOGIN_TYPE
} from "../types";
import useService from "../../05_services";

export const useActLogin = () => {

    const { LoginService } = useService()

    const actPostLogin = (data) => async (dispatch) => {
        try {
            dispatch({
                type: LOGIN_TYPE.USER_LOADING
            })
            await LoginService.PostLogin(data)
                .then(res => {
                    dispatch({
                        type: LOGIN_TYPE.LOGIN_SUCCESSFUL,
                        payload: res.data
                    })
                })
                .catch(e => {
                    if (e.response.status === 401) {
                        dispatch({
                            type: LOGIN_TYPE.AUTHENTICATION_ERROR,
                            payload: e.response.data
                        })
                    }
                })
        } catch (e) {
            dispatch({
                type: LOGIN_TYPE.AUTHENTICATION_ERROR,
                payload: e
            })
        }
    }

    const actGetLogout = () => async (dispatch, getState) => {
        try {
            const res = await LoginService.GetLogout(getState().auth.token)
            console.log(res, 'logout')
            dispatch({
                type: LOGIN_TYPE.LOGOUT_SUCCESSFUL
            })
        } catch (e) {
            console.log(e, 'error')
            dispatch({
                type: LOGIN_TYPE.LOGIN_FAILED
            })
        }
    }

    const actLoadToken = () => (dispatch, getState) => {
        dispatch({ type: "USER_LOADING" });
        getState().auth.token ?
            dispatch({ type: 'USER_LOADED' }) :
            dispatch({ type: "AUTHENTICATION_ERROR" })
    }

    return {
        actPostLogin,
        actGetLogout,
        actLoadToken
    }
}
