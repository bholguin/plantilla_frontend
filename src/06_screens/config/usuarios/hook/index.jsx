import { useEffect } from "react";
import { userSelector } from "../selectors";
import { useDispatch, useSelector } from "react-redux";
import {
    useActUser
} from "../../../../01_actions/config/user";
import {
    actOpenCOEModal
} from '../../../../01_actions/common'
import { useColumnTable } from '../props/table'

export const useUser = () => {
    const { actGetUsers } = useActUser()
    const dispatch = useDispatch()
    const users = useSelector(userSelector)
    const columns = useColumnTable()
    const createModal = () => dispatch(
        actOpenCOEModal({
            tittle: 'Crear'
        })
    )

    const postUser = () => { }

    useEffect(() => {
        dispatch(actGetUsers())
    }, [dispatch])

    return {
        users,
        columns,
        postUser,
        createModal
    }
}

