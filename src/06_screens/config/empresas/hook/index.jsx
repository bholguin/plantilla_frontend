import React, { useEffect, useState } from 'react'
import { useHistory } from "react-router-dom"
import { useSelector } from "react-redux";
import { empresasSelector } from "../../../../08_selectors/config/empresa";
import { useActions } from "../../../../01_actions"

import IconButton from '@material-ui/core/IconButton';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import EditIcon from '@material-ui/icons/Edit';

export const useEmpresas = () => {
    const history = useHistory()
    const empresas = useSelector(empresasSelector)

    const {
        dispatch,
        useActEmpresa
    } = useActions()

    const {
        actGetEmpresas,
        actDeleteEmpresa
    } = useActEmpresa()

    const [open, setOpen] = useState(false)
    const [id, setId] = useState(null)
    const handleOpen = () => setOpen(!open)
    const createEmpresa = () => history.push('/app/config/empresas/create-or-edit', { action: "crear" })
    const editEmpresa = (data) => history.push('/app/config/empresas/create-or-edit', { action: "editar", empresa: data })

    const handleDelete = (id) => {
        handleOpen()
        setId(id)
    }

    const onDelete = () => {
        dispatch(actDeleteEmpresa({
            data: id,
            onSuccess: () => {
                handleOpen()
                dispatch(actGetEmpresas())
            }
        }))
    }

    useEffect(() => {
        dispatch(actGetEmpresas())
    }, [dispatch])// eslint-disable-line react-hooks/exhaustive-deps


    return {
        open,
        empresas,
        onDelete,
        handleOpen,
        handleDelete,
        editEmpresa,
        createEmpresa
    }

}

export const useColumnTable = ({ editEmpresa, handleDelete }) => {

    const [columns] = useState([{
        id: 'empresas',
        columns: [
            {
                Header: 'Nombre',
                accessor: 'nombre',
                filter: 'fuzzyText'
            },
            {
                Header: 'Nit',
                accessor: 'nit',
            },
            {
                Header: 'Direccion',
                accessor: 'direccion',
            },
            {
                Header: 'Telefono',
                accessor: 'telefono',
            },
            {
                Header: '', // No header
                id: 'opciones', // It needs an ID
                Cell: ({ row }) => (
                    <span>
                        <IconButton onClick={() => editEmpresa(row.original)}>
                            <EditIcon />
                        </IconButton>
                        <IconButton onClick={() => handleDelete(row.original.id)}>
                            <DeleteForeverIcon />
                        </IconButton>
                    </span>
                )
            }
        ],
    }])

    return {
        columns
    }
}