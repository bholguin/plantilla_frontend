import { useEffect } from "react"
import { useLocation, useHistory } from "react-router-dom"
import { useActions } from "../../../../../01_actions"

export const useCreateOrEdit = ({ reset }) => {
    
    const history = useHistory()
    const { state } = useLocation()

    const { action, empresa } = state

    
    const {
        dispatch,
        useActEmpresa
    } = useActions()

    const {
        actPostEmpresa,
        actPutEmpresa
    } = useActEmpresa()

    //const {actPostCreateFolder} = useActSig()

    const onSuccess = (data) => {
        //console.log(data)
        history.goBack()
        //dispatch(actPostCreateFolder({data}))
    }

    const submit = (data) => {
        switch (action) {
            case 'crear':
                dispatch(actPostEmpresa({ data, onSuccess }))
                break;
            case 'editar':
                dispatch(actPutEmpresa({
                    data: { ...data, id: empresa.id },
                    onSuccess
                }))
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