import useServices from "../../../05_services"
import { EMPRESA_TYPE } from "../../types";
import { useToast } from '../../../00_utilities/Toast/hook'
export const useActEmpresa = () => {
    const { Toast, CREATE_SUCCESS } = useToast();
    const { useEmpresaServices } = useServices()
    const {
        GetEmpresas,
        PostEmpresa
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


    const actPostEmpresa = ({ data, onSuccess }) => async (dispatch) => {
        try {
            await PostEmpresa(data)
            Toast(CREATE_SUCCESS)
            onSuccess && onSuccess()
        } catch (e) {

        }

    }


    return {
        actGetEmpresas,
        actPostEmpresa
    }

}