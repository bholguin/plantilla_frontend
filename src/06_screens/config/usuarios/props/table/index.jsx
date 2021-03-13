import React, { useMemo } from 'react';
import IconButton from '@material-ui/core/IconButton';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import EditIcon from '@material-ui/icons/Edit';
import { useDispatch } from 'react-redux'
import {
    actOpenCOEModal,
    actOpenDeleteItem
} from '../../../../../01_actions/common'
//hook

export const useColumnTable = () => {

    const dispatch = useDispatch()
    const openDeleteItem = () => dispatch(actOpenDeleteItem())
    const editModal = () => dispatch(actOpenCOEModal({
        tittle: 'Editar'
    }))

    const columns = [
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
                            <IconButton onClick={() => editModal()}>
                                <EditIcon />
                            </IconButton>
                            <IconButton onClick={() => openDeleteItem()}>
                                <DeleteForeverIcon />
                            </IconButton>
                        </span>
                    )
                }
            ],
        },
    ];

    return useMemo(() => columns, [columns])
}

