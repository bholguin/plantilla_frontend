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
        actClearUser
    }
}




