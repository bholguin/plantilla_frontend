import { useDispatch } from "react-redux"
import { useActEmpresa } from "./config/empresa"
import { useActUser } from "./config/user"

export const useActions = () => {

    const dispatch = useDispatch()

    return {
        dispatch,
        useActUser,
        useActEmpresa
    }
}