import { useEffect } from "react"
import { useLocation, useHistory } from "react-router-dom"
import { useActions } from "../../../../../01_actions"

export const useCreateOrEdit = ({ reset }) => {

    const { state } = useLocation()
    const { action, empresa } = state

    const history = useHistory()
    const {
        dispatch,
        useActEmpresa
    } = useActions()

    const {
        actPostEmpresa
    } = useActEmpresa()

    const onSuccess = () => history.goBack()

    const submit = (data) => {
        switch (action) {
            case 'crear':
                dispatch(actPostEmpresa({ data, onSuccess }))
                break;
            case 'editar':
                break
            default:
                break;
        }

    }

    useEffect(() => {
        if (empresa) {
            reset({
                nombre: empresa.nombre,
                nit: empresa.nit,
                direccion: empresa.direccion,
                telefono: empresa.telefono
            })
        }
    }, [reset, empresa])


    return {
        action,
        submit
    }
}