import React, { useState } from 'react';
import TableApp from '../../../00_utilities/table/tableApp';
import ModalForm from './props/form/modal_form';
import Workspace from '../../../workspace';
import ButtonCreate from '../../../00_utilities/button_create';
import AlertDelete from '../../../00_utilities/alert_delete'

//new
import { useUser } from "./hook";

const Usuario = () => {

    const {
        users,
        columns,
        postUser,
        createModal
    } = useUser()
    const [buttonProps] = useState({ tittle: 'Crear', submit: postUser })

    return (
        <Workspace>
            <AlertDelete />
            <ModalForm />
            <ButtonCreate open_modal={createModal} buttonProps={buttonProps} />
            <TableApp columns={columns} data={users.list} />
        </Workspace>
    )
};

export default Usuario