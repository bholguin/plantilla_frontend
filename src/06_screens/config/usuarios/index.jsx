import React from 'react';
import TableApp from '../../../00_utilities/table/tableApp';
import Workspace from '../../../workspace';
import ButtonCreate from '../../../00_utilities/button_create';
import AlertDelete from '../../../00_utilities/alert_delete'

//new
import { useUser, useColumnTable } from "./hook";

const Usuario = () => {
    const {
        open,
        usuarios,
        handleOpen,
        createUsuario,
        editUsuario,
        handleDelete,
        onDelete
    } = useUser()

    const { columns } = useColumnTable({ editUsuario, handleDelete })

    return (
        <Workspace>
            <AlertDelete open={open} onClose={handleOpen} onDelete={onDelete} />
            <ButtonCreate handleForm={createUsuario} />
            <TableApp columns={columns} data={usuarios} />
        </Workspace>
    )
};

export default Usuario