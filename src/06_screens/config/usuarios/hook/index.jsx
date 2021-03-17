import { useEffect, useState } from "react";
import { userSelector } from "../selectors";
import { useDispatch, useSelector } from "react-redux";
import {
    useActUser
} from "../../../../01_actions/config/user";
import {
    actOpenCOEModal,
    actCloseCOEModal
} from '../../../../01_actions/common'
import { useColumnTable } from '../props/table'

export const useUser = () => {
    const dispatch = useDispatch()
    const { actGetUsers, actClearUser } = useActUser()

    const { user, createoredit } = useSelector(userSelector)
    const columns = useColumnTable()

    const handleFormClose = () => {
        dispatch(actClearUser())
        dispatch(actCloseCOEModal())
    }
    
    const handleFormOpen = () => dispatch(
        actOpenCOEModal({
            tittle: 'Crear',
            submit: () => {

            }
        })
    )

    useEffect(() => {
        dispatch(actGetUsers())
    }, [dispatch])

    return {
        users: user.list,
        columns,
        createoredit,
        model: user.model,
        handleFormOpen,
        handleFormClose
    }
}

