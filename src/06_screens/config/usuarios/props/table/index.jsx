import React, { useMemo } from 'react';
import IconButton from '@material-ui/core/IconButton';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import EditIcon from '@material-ui/icons/Edit';
import { useDispatch } from 'react-redux'
import {
    actOpenCOEModal,
    actOpenDeleteItem
} from '../../../../../01_actions/common'
import { useActUser } from "../../../../../01_actions/config/user";
//hook
import { useUser } from "../../hook";

export const useColumnTable = () => {
    const {actFeatcData} = useActUser()
    const dispatch = useDispatch()
    const openDeleteItem = () => dispatch(actOpenDeleteItem())
    const openEditModal = (item) => {
        dispatch(actFeatcData(item))
        dispatch(actOpenCOEModal({
            tittle: 'Editar',
            submit: () => {

            }
        }))
    }
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
                            <IconButton onClick={() => openEditModal(row.original)}>
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

