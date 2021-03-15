import { useEffect, useState } from "react";
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
    const [form, setForm] = useState(false)
    const handleForm = () => setForm(!form)


    const {list, model} = useSelector(userSelector)
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
    console.log(list)
    return {
        users: list,
        columns,
        form,
        postUser,
        createModal,
        handleForm
    }
}

