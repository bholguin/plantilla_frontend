import React, { useEffect, useMemo, useState } from 'react';
import { connect } from 'react-redux';
import TableApp from '../../../00_utilities/table/tableApp';
import { useColumnTable } from './table/usuarioTabla';
import ModalForm from './form/modal_form';
import * as actions from '../../../01_actions';
import Workspace from '../../../workspace';
import ButtonCreate from '../../../00_utilities/button_create';
import {map} from 'lodash';


//new
import { useUser } from "./hook";

const Usuario = () => {

    const { 
        users,
        postUser,
        OpenCOEModal 
    } = useUser()

    const [columns] = useState(useColumnTable());
    const [buttonProps] = useState({ tittle: 'Crear', submit: postUser })

    return (
        <Workspace>
            <ModalForm />
            <ButtonCreate open_modal={OpenCOEModal} buttonProps={buttonProps} /> 
            <TableApp columns={columns} data={users.list} />
        </Workspace>
    )
};

export default Usuario