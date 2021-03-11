import { 
    USUARIO_TYPES
} from "../../types";
import useServices from "../../../05_services";

export const actGetUsers = () => async (dispatch) => {
    const { UserService } = useServices()
    try {
        dispatch({
            type: USUARIO_TYPES.LOAD
        })
        const res = await UserService.GetUsers()
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



