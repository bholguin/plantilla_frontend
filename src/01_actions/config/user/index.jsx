import {
    USUARIO_TYPES
} from "../../types";
import useServices from "../../../05_services";
import { useToast } from '../../../00_utilities/Toast/hook'

export const useActUser = () => {

    const { useUsuarioServices } = useServices()
    const { Toast, EDIT_SUCCESS, CREATE_SUCCESS, DELETE_SUCCESS } = useToast();
    const {
        GetUsers,
        PostUser,
        PutUser,
        DeleteUser
    } = useUsuarioServices()

    const actGetUsers = () => async (dispatch) => {
        try {
            const res = await GetUsers()
            dispatch({
                type: USUARIO_TYPES.SUCCESS,
                payload: res.data
            })
        } catch (e) {

        }
    }

    const actUpdateUser = ({ data, onSuccess }) => async () => {
        try {
            await PutUser(data)
            Toast(EDIT_SUCCESS)
            onSuccess && onSuccess()
        } catch (e) {

        }
    }

    const actCreateUser = ({ data, onSuccess }) => async () => {
        try {
            await PostUser(data)
            Toast(CREATE_SUCCESS)
            onSuccess && onSuccess()
        } catch (e) {

        }
    }

    const actDeleteUser = ({ data, onSuccess }) => async () => {
        try {
            await DeleteUser(data)
            Toast(DELETE_SUCCESS)
            onSuccess && onSuccess()
        } catch (e) {

        }
    }



    return {
        actGetUsers,
        actCreateUser,
        actUpdateUser,
        actDeleteUser
    }
}




