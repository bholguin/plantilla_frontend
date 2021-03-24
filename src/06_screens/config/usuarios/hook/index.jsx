import { useEffect, useState } from "react";
import { userSelector } from "../selectors";
import { useDispatch, useSelector } from "react-redux";
import {
    useActUser
} from "../../../../01_actions/config/user";
import {
    actOpenCOEModal,
    actCloseCOEModal,
    actCloseDeleteItem
} from '../../../../01_actions/common'
import { useColumnTable } from '../props/table'

export const useUser = () => {
    const dispatch = useDispatch()
    const { actGetUsers, actClearUser, actCreateUser } = useActUser()

    const { user, createoredit } = useSelector(userSelector)

    const handleFormClose = () => {
        dispatch(actClearUser())
        dispatch(actCloseCOEModal())
    }

    const handleCloseModalDelete = () => dispatch(actCloseDeleteItem())

    const submit = (data) => dispatch(createoredit.buttonProps.submit(data))

    const handleFormOpen = () => dispatch(
        actOpenCOEModal({
            tittle: 'Crear',
            submit: (data) => actCreateUser(data, () => handleFormClose())
        })
    )

    const columns = useColumnTable({handleFormClose, handleCloseModalDelete})

    useEffect(() => {
        dispatch(actGetUsers())
    }, [dispatch])

    return {
        users: user.list,
        columns,
        createoredit,
        model: user.model,
        handleFormOpen,
        submit
    }
}

