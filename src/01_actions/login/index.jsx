import { LOGIN_TYPE } from "../types";
import useService from "../../05_services";

export const useActLogin = () => {

    const { useLoginServices } = useService()

    const {
        GetLogout,
        PostLogin
    } = useLoginServices()

    const actPostLogin = (data) => async (dispatch) => {
        try {
            const res = await PostLogin(data)
            dispatch({
                type: LOGIN_TYPE.LOGIN_SUCCESSFUL,
                payload: res.data
            })
        } catch (e) {
            dispatch({
                type: LOGIN_TYPE.AUTHENTICATION_ERROR,
                payload: e.response.data
            })
        }
    }

    const actGetLogout = () => async (dispatch) => {
        try {
            await GetLogout()
            dispatch({
                type: LOGIN_TYPE.LOGOUT_SUCCESSFUL
            })
        } catch (e) {

        }
    }

    const actTokenError = () => (dispatch) => {
        dispatch({
            type: LOGIN_TYPE.LOGOUT_SUCCESSFUL
        })
    }

    return {
        actPostLogin,
        actGetLogout,
        actTokenError
    }
}
