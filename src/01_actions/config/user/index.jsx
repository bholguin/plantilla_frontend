import {
    USUARIO_TYPES
} from "../../types";
import useServices from "../../../05_services";

export const useActUser = () => {

    const { UserService } = useServices()

    const actGetUsers = () => async (dispatch, getState) => {
        try {
            dispatch({
                type: USUARIO_TYPES.LOAD
            })
            const res = await UserService.GetUsers(getState().auth.token)
            dispatch({
                type: USUARIO_TYPES.FEATCH_ALL,
                payload: res.data
            })

        } catch (e) {
            dispatch({
                type: USUARIO_TYPES.ERROR,
                payload: e
            })
        }
    }

    return {
        actGetUsers
    }
}


export const actGetUsers = () => async (dispatch, getState) => {
    const { UserService } = useServices()
    try {
        dispatch({
            type: USUARIO_TYPES.LOAD
        })
        const res = await UserService.GetUsers(getState().auth.token)
        dispatch({
            type: USUARIO_TYPES.FEATCH_ALL,
            payload: res.data
        })

    } catch (e) {
        dispatch({
            type: USUARIO_TYPES.ERROR,
            payload: e
        })
    }
}



