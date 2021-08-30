import { LOGIN_TYPE } from "../types";
import useService from "../../05_services";

export const useActLogin = () => {

    const { useLoginServices } = useService()

    const {
        GetLogout,
        PostLogin,
        GetLoginMicrosoft,
        GetTokenMicrosoft
    } = useLoginServices()

    const actPostLogin = ({ data, onSuccess }) => async (dispatch) => {
        try {
            const res = await PostLogin(data)
            dispatch({
                type: LOGIN_TYPE.LOGIN_SUCCESSFUL,
                payload: res.data
            })
            onSuccess && onSuccess()
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

    const actGetLoginMicrosoft = () => async (dispatch) => {
        try {
            const res = await GetLoginMicrosoft()
            window.location.href = res.request.responseURL
        } catch (e) {
            console.log(e);
        }
    }

    const actGetTokenMicrosoft = ({code}) => async (dispatch) => {
        try {
            const res = await GetTokenMicrosoft({code})
            dispatch({
                type: LOGIN_TYPE.LOGIN_SUCCESSFUL_MICROSOFT,
                payload: res.data
            })
            window.history.pushState({}, document.title, "/" + "app");
        } catch (e) {
            console.log(e.response);
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
        actTokenError,
        actGetLoginMicrosoft,
        actGetTokenMicrosoft
    }
}
