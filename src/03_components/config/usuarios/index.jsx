import React, { useEffect, useMemo, useState } from 'react';
import { connect } from 'react-redux';
import TableApp from '../../../00_utilities/table/tableApp';
import { useColumnTable } from './table/usuarioTabla';
import ModalForm from './form/modal_form';
import * as actions from '../../../01_actions';
import Workspace from '../../../workspace';
import ButtonCreate from '../../../00_utilities/button_create';
import {map} from 'lodash';

const Usuario = (props) => {
    const { 
        usuarios,
        fetchUsuarios,
        postUsuario
    } = props;
    useEffect(() => { fetchUsuarios(); }, [fetchUsuarios]);
    const [columns] = useState(useColumnTable());
    const [buttonProps] = useState({ tittle: 'Crear', submit: postUsuario })
    const data = useMemo(() => usuarios, [usuarios]);
    const list_array = map(data, e => e);
    return (
        <Workspace>
            <ModalForm />
            <ButtonCreate open_modal={props.OpenCOEModal} buttonProps={buttonProps} /> 
            <TableApp columns={columns} data={list_array} />
        </Workspace>
    )
};

const mapPropsToState = (state) => { return { usuarios: state.usuarios } }

export default connect(mapPropsToState, actions)(Usuario);