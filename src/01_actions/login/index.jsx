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
            const res = await LoginService.PostLogin(data)
            console.log(res, 'response')
            dispatch({
                type: LOGIN_TYPE.LOGIN_SUCCESSFUL,
                payload: res.data
            })
        } catch (e) {
            dispatch({
                type: LOGIN_TYPE.AUTHENTICATION_ERROR,
                payload: e
            })
        }
    }



    return {
        actPostLogin,
    }
}

export const actGetLogout = () => async(dispatch) => {
    const { LoginService } = useService()
    try {
        const res = await LoginService.GetLogout()
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