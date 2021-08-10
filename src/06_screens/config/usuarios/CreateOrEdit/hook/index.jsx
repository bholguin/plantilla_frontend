import { useEffect } from "react"
import { useLocation, useHistory } from "react-router-dom"
import { useActions } from "../../../../../01_actions"

export const useCreateOrEdit = ({ reset }) => {

    const history = useHistory()
    const { state } = useLocation()

    const { action, usuario } = state


    const {
        dispatch,
        useActUser
    } = useActions()

    const {
        actCreateUser,
        actUpdateUser
    } = useActUser()

    const onSuccess = () => history.goBack()

    const submit = (data) => {
        switch (action) {
            case 'crear':
                dispatch(actCreateUser({ data, onSuccess }))
                break;
            case 'editar':
                dispatch(actUpdateUser({
                    data: { ...data, id: usuario.id },
                    onSuccess
                }))
                break
            default:
                break;
        }
    }

    useEffect(() => {
        if (usuario) {
            console.log(usuario)
            reset({
                nombre: usuario.nombre,
                apellido: usuario.apellido,
                username: usuario.username,
            })
        }
    }, [reset, usuario])


    return {
        action,
        submit
    }
}