import React, { useMemo } from 'react';
import IconButton from '@material-ui/core/IconButton';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import EditIcon from '@material-ui/icons/Edit';

export const useColumnTable = () => {

    const columns = useMemo(() => [
        {
            Header: 'USUARIOS',
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
            ],
        },
        {
            Header: () => null, // No header
            id: 'expander', // It needs an ID
            Cell: ({ row }) => (
                <span style={{margin: '0 auto'}}>
                    <IconButton>
                        <EditIcon />
                    </IconButton>
                    <IconButton>
                        <DeleteForeverIcon />
                    </IconButton>
                </span>
            )
        }
    ]);
    return columns
}

