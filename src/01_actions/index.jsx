import {useDispatch} from "react-redux"
import {useActEmpresa} from "./config/empresa"

export const useActions = () => {

    const dispatch = useDispatch()

    return{
        dispatch,
        useActEmpresa
    }

}