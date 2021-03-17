import React, { useState } from 'react';
import TableApp from '../../../00_utilities/table/tableApp';
import ModalForm from './props/form/modal_form';
import Workspace from '../../../workspace';
import ButtonCreate from '../../../00_utilities/button_create';
import AlertDelete from '../../../00_utilities/alert_delete'
import Form from './props/form'
//new
import { useUser } from "./hook";

const Usuario = () => {

    const {
        users,
        columns,
        handleFormOpen,
    } = useUser()
    return (
        <Workspace>
            <AlertDelete />
            <ButtonCreate handleForm={handleFormOpen} />
            <TableApp columns={columns} data={users} />
            <Form />
        </Workspace>
    )
};

export default Usuario