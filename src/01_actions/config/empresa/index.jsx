import useServices from "../../../05_services"
import { useToast } from '../../../00_utilities/Toast/hook'
import { EMPRESA_TYPE } from "../../types";

export const useActEmpresa = () => {

    const { useEmpresaServices } = useServices()

    const {
        Toast,
        CREATE_SUCCESS,
        EDIT_SUCCESS,
        DELETE_SUCCESS
    } = useToast();

    const {
        GetEmpresas,
        PostEmpresa,
        PutEmpresa,
        DeleteEmpresa
    } = useEmpresaServices()

    const actGetEmpresas = () => async (dispatch) => {
        try {
            const res = await GetEmpresas()
            dispatch({
                type: EMPRESA_TYPE.SUCCESS,
                payload: res.data
            })
        } catch (e) {

        }
    }

    const actPostEmpresa = ({ data, onSuccess }) => async () => {
        try {
            await PostEmpresa(data)
            Toast(CREATE_SUCCESS)
            onSuccess && onSuccess()
        } catch (e) {

        }
    }

    const actPutEmpresa = ({ data, onSuccess }) => async () => {
        try {
            await PutEmpresa(data)
            Toast(EDIT_SUCCESS)
            onSuccess && onSuccess()
        } catch (e) {

        }
    }

    const actDeleteEmpresa = ({ data, onSuccess }) => async () => {
        try {
            await DeleteEmpresa(data)
            Toast(DELETE_SUCCESS)
            onSuccess && onSuccess()
        } catch (e) {

        }
    }

    return {
        actGetEmpresas,
        actPostEmpresa,
        actPutEmpresa,
        actDeleteEmpresa
    }

}