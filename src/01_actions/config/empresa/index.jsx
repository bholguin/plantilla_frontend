import useServices from "../../../05_services"
import { useToast } from '../../../00_utilities/Toast/hook'
import { EMPRESA_TYPE } from "../../types";

export const useActEmpresa = () => {

    const { useEmpresaServices, useSigServices } = useServices()

    const {PostCreateFolder} = useSigServices()

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
            const {nombre} = data
            const folder = {
                "name": nombre,
                "folder": {},
                "@microsoft.graph.conflictBehavior": "rename"
            }
            const res = await PostCreateFolder({folder})
            await PostEmpresa({...data, folder_id: res.data.id})
            Toast(CREATE_SUCCESS)
            onSuccess && onSuccess(data)
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