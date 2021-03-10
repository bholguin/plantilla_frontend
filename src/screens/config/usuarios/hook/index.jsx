import { useEffect } from "react";
import { userSelector } from "../selectors";
import { useDispatch, useSelector} from "react-redux";
import { 
    actGetUsers,
} from "../../../../01_actions/config/user";
import {
    actOpenCOEModal,
    actOpenDeleteItem
} from '../../../../01_actions/common'
import {useColumnTable} from '../props/table'

export const useUser = () => {
    const dispatch = useDispatch()
    const users = useSelector(userSelector)
    const columns = useColumnTable()
    const createModal = () => dispatch(actOpenCOEModal({
        tittle: 'Crear'
    }))
    
    const postUser = () => {

    }

    useEffect(()=>{
        dispatch(actGetUsers())
    },[dispatch])

    return{
        users,
        columns,
        postUser,
        createModal
    }
}

