import { useDispatch } from "react-redux"
import { useActEmpresa } from "./config/empresa"
import { useActUser } from "./config/user"
import { useActLogin } from "./login"

export const useActions = () => {

    const dispatch = useDispatch()

    return {
        dispatch,
        useActLogin,
        useActUser,
        useActEmpresa
    }
}