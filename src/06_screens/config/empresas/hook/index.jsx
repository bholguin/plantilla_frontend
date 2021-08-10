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
        actGetEmpresas
    } = useActEmpresa()

    const createEmpresa = () => history.push('/app/config/empresas/create-or-edit', { action: "crear" })
    const editEmpresa = (data) => history.push('/app/config/empresas/create-or-edit', { action: "editar", empresa: data })

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
                        <IconButton onClick={() => { }}>
                            <DeleteForeverIcon />
                        </IconButton>
                    </span>
                )
            }
        ],
    }])

    useEffect(() => {
        dispatch(actGetEmpresas())
    }, [dispatch])



    return {
        columns,
        empresas,
        createEmpresa
    }

}