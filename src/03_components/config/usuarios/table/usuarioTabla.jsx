import React, { useMemo } from 'react';
import IconButton from '@material-ui/core/IconButton';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import EditIcon from '@material-ui/icons/Edit';
import { useDispatch, useSelector } from 'react-redux'

export const useColumnTable = () => {
    const Dispatch = useDispatch();
    const open_modal = (data) => Dispatch({ type: 'OPEN_COE_MODAL', initialValues: data });
    const open_delete = () => Dispatch({type: 'OPEN_DELETE_ITEM'});
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
                    classes:{width: '20%'},
                    Cell: ({ row }) => (
                        <span>
                            <IconButton onClick={() => open_modal(row.original)}>
                                <EditIcon />
                            </IconButton>
                            <IconButton onClick={() => open_delete()}>
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

