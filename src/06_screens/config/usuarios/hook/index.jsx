import React, { useEffect, useState } from "react";
import { userSelector } from "../../../../08_selectors/config/usuario";
import { useHistory } from "react-router-dom"
import { useSelector } from "react-redux";
import { useActions } from "../../../../01_actions";

import IconButton from '@material-ui/core/IconButton';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import EditIcon from '@material-ui/icons/Edit';

export const useUser = () => {

    const history = useHistory()
    const { dispatch, useActUser } = useActions()
    const { actGetUsers, actDeleteUser } = useActUser()

    const usuarios = useSelector(userSelector)

    const [open, setOpen] = useState(false)
    const [id, setId] = useState(null)
    const handleOpen = () => setOpen(!open)
    const handleDelete = (id) => {
        handleOpen()
        setId(id)
    }

    const onDelete = () => {
        dispatch(actDeleteUser({
            data: id,
            onSuccess: () => {
                handleOpen()
                dispatch(actGetUsers())
            }
        }))
    }

    const createUsuario = () => history.push('/app/config/usuario/create-or-edit', { action: "crear" })
    const editUsuario = (data) => history.push('/app/config/usuario/create-or-edit', { action: "editar", usuario: data })

    useEffect(() => {
        dispatch(actGetUsers())
    }, [dispatch])// eslint-disable-line react-hooks/exhaustive-deps

    return {
        open,
        usuarios,
        handleOpen,
        createUsuario,
        editUsuario,
        handleDelete,
        onDelete
    }
}

export const useColumnTable = ({ editUsuario, handleDelete }) => {

    const [columns] = useState([
        {
            id: 'user',
            columns: [
                {
                    Header: 'Nombre',
                    accessor: 'nombre',
                    filter: 'fuzzyText'
                },
                {
                    Header: 'Apellido',
                    accessor: 'apellido',
                },
                {
                    Header: 'Username',
                    accessor: 'username',
                },
                {
                    Header: '', // No header
                    id: 'opciones', // It needs an ID
                    classes: { width: '20%' },
                    Cell: ({ row }) => (
                        <span>
                            <IconButton onClick={() => editUsuario(row.original)}>
                                <EditIcon />
                            </IconButton>
                            <IconButton onClick={() => handleDelete(row.original.id)}>
                                <DeleteForeverIcon />
                            </IconButton>
                        </span>
                    )
                }
            ],
        },
    ]);

    return {
        columns
    }
}

