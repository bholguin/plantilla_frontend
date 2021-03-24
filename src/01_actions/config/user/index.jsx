import {
    USUARIO_TYPES
} from "../../types";
import useServices from "../../../05_services";

export const useActUser = () => {

    const { UserService } = useServices()

    const actGetUsers = () => async (dispatch) => {
        dispatch({
            type: USUARIO_TYPES.LOAD
        })

        await UserService.GetUsers()
            .then(res => {
                dispatch({
                    type: USUARIO_TYPES.FEATCH_ALL,
                    payload: res.data
                })
            }).catch(e => {
                dispatch({
                    type: USUARIO_TYPES.ERROR,
                    payload: e
                })
            })
    }

    const actUpdateUser = (data, callback) => async (dispatch) => {
        await UserService.PutUsers(data)
            .then(res => {
                dispatch({
                    type: USUARIO_TYPES.UPDATE,
                    payload: res.data
                })
                if (callback) {
                    callback()
                }
            }).catch(e => {
                dispatch({
                    type: USUARIO_TYPES.ERROR,
                    payload: e
                })
            })
    }

    const actCreateUser = (data, callback) => async (dispatch) => {
        dispatch({
            type: USUARIO_TYPES.LOAD
        })

        await UserService.PostUsers(data)
            .then(res => {
                dispatch({
                    type: USUARIO_TYPES.CREATE,
                    payload: res.data
                })
                if (callback) {
                    callback()
                }
            }).catch(e => {
                dispatch({
                    type: USUARIO_TYPES.ERROR,
                    payload: e
                })
            })
    }

    const actDeleteUser = (data, callback) => async (dispatch) => {
        console.log(callback, 'callback')
        dispatch({
            type: USUARIO_TYPES.LOAD
        })
        await UserService.DeleteUsers(data)
            .then(res => {
                dispatch({
                    type: USUARIO_TYPES.DELETE,
                    payload: res.data
                })
                if (callback) {
                    callback()
                }
            }).catch(e => {
                dispatch({
                    type: USUARIO_TYPES.ERROR,
                    payload: e
                })
            })
    }


    const actFeatcData = (data) => dispatch => {
        dispatch({
            type: USUARIO_TYPES.FEATCH,
            payload: data
        })
    }

    const actClearUser = () => dispatch => {
        dispatch({
            type: USUARIO_TYPES.CLEAR
        })
    }

    return {
        actGetUsers,
        actFeatcData,
        actClearUser,
        actCreateUser,
        actUpdateUser,
        actDeleteUser
    }
}




