import { useDispatch } from "react-redux"
import { useActEmpresa } from "./config/empresa"
import { useActUser } from "./config/user"
import { useActLogin } from "./login"
import { useActSig } from "./sig";

export const useActions = () => {

    const dispatch = useDispatch()

    return {
        dispatch,
        useActSig,
        useActLogin,
        useActUser,
        useActEmpresa
    }
}